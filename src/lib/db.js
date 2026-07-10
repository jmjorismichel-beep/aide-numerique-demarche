import Dexie from 'dexie'

// Base de données locale (IndexedDB) : c'est ELLE la source de vérité pour l'app.
// L'app lit/écrit toujours ici en premier (fonctionne hors-ligne), puis lib/sync.js
// pousse/tire les changements vers Firebase (Firestore) dès qu'une connexion est disponible.
export const db = new Dexie('parcours_numerique')

db.version(2).stores({
  // Session locale (1 seule ligne, id fixe "session")
  session: 'id',

  users: 'id, email, role, updated_at',
  groups: 'id, updated_at, archived',
  moduleContent: 'id, updated_at', // contenu éditable des modules (surcharge des modules par défaut)
  moduleProgress: 'id, [user_id+module_id], user_id, updated_at',
  testResults: 'id, user_id, updated_at',
  messages: 'id, thread_id, sender_id, recipient_id, created_at, read',
  activityLogs: 'id, user_id, created_at',

  // File d'attente de synchronisation : chaque opération locale non encore
  // confirmée par le serveur est ajoutée ici avec un statut 'pending'.
  syncQueue: '++localId, table, status, created_at',

  // Préférences d'affichage locales (taille de texte...) — jamais synchronisées.
  settings: 'id'
})

export const uid = () =>
  crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`
