import { doc, setDoc, deleteDoc, collection, getDocs } from 'firebase/firestore'
import { db, uid } from './db'
import { dbRemote, isOnline } from './firebase'

// Collections Firestore synchronisées (même nom que les tables locales Dexie)
const SYNCED_TABLES = [
  'users', 'groups', 'moduleContent', 'moduleProgress',
  'testResults', 'messages', 'activityLogs', 'bugReports', 'siteMeta'
]

let syncing = false
const listeners = new Set()
export function onSyncStatusChange(fn) { listeners.add(fn); return () => listeners.delete(fn) }
function notify(status) { listeners.forEach(fn => fn(status)) }

/**
 * Écrit un enregistrement en LOCAL immédiatement (l'app ne doit jamais
 * attendre le réseau), puis programme son envoi vers Firestore.
 */
export async function saveRecord(table, record) {
  const now = new Date().toISOString()
  const withMeta = { ...record, id: record.id || uid(), updated_at: now }
  await db.table(table).put(withMeta)
  await db.syncQueue.add({
    table, op: 'upsert', record: withMeta, status: 'pending', created_at: now
  })
  if (isOnline()) processSyncQueue()
  return withMeta
}

export async function deleteRecord(table, id) {
  await db.table(table).delete(id)
  await db.syncQueue.add({
    table, op: 'delete', record: { id }, status: 'pending', created_at: new Date().toISOString()
  })
  if (isOnline()) processSyncQueue()
}

export async function processSyncQueue() {
  if (syncing || !dbRemote || !isOnline()) return
  syncing = true
  notify('syncing')
  try {
    const pending = await db.syncQueue.where('status').equals('pending').toArray()
    for (const item of pending) {
      try {
        const ref = doc(dbRemote, item.table, item.record.id)
        if (item.op === 'upsert') {
          await setDoc(ref, item.record, { merge: true })
        } else if (item.op === 'delete') {
          await deleteDoc(ref)
        }
        await db.syncQueue.delete(item.localId)
      } catch (e) {
        console.warn('Sync: échec sur', item.table, e.message)
        // On laisse l'item en 'pending', il sera retenté au prochain passage.
      }
    }
    await pullRemoteChanges()
    notify('idle')
  } finally {
    syncing = false
  }
}

// Tire les changements distants et les fusionne localement (dernier écrit gagne,
// comparaison sur updated_at) — sauf s'il existe une opération locale pending
// sur le même id, auquel cas on garde la version locale pour ne pas l'écraser.
export async function pullRemoteChanges() {
  if (!dbRemote || !isOnline()) return
  const pendingIds = new Set((await db.syncQueue.toArray()).map(i => i.record?.id))

  for (const table of SYNCED_TABLES) {
    let snapshot
    try {
      snapshot = await getDocs(collection(dbRemote, table))
    } catch (e) {
      console.warn('Sync: lecture impossible sur', table, e.message)
      continue
    }
    for (const docSnap of snapshot.docs) {
      const remote = docSnap.data()
      if (pendingIds.has(remote.id)) continue
      const local = await db.table(table).get(remote.id)
      if (!local || new Date(remote.updated_at) > new Date(local.updated_at)) {
        await db.table(table).put(remote)
      }
    }
  }
}

export function initSyncEngine() {
  window.addEventListener('online', () => processSyncQueue())
  if (isOnline()) processSyncQueue()
  // Tentative périodique (couvre le cas où le navigateur ne déclenche pas 'online')
  setInterval(() => { if (isOnline()) processSyncQueue() }, 30000)
}
