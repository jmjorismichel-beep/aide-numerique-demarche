import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db, uid } from '../../lib/db'
import { saveRecord } from '../../lib/sync'

export default function Groupes() {
  const groups = useLiveQuery(() => db.groups.filter(g => !g.archived).toArray()) || []
  const [nom, setNom] = useState('')
  const [renaming, setRenaming] = useState(null)
  const [renameValue, setRenameValue] = useState('')
  const [history, setHistory] = useState([]) // pile d'actions annulables

  function pushUndo(action) {
    setHistory(h => [...h.slice(-9), action])
  }

  async function creer(e) {
    e.preventDefault()
    if (!nom.trim()) return
    const record = await saveRecord('groups', { id: uid(), name: nom.trim(), archived: false })
    setNom('')
    pushUndo({ label: `Création du groupe « ${record.name} »`, undo: () => saveRecord('groups', { ...record, archived: true }) })
  }

  async function renommer(group) {
    if (!renameValue.trim()) return
    const before = { ...group }
    await saveRecord('groups', { ...group, name: renameValue.trim() })
    pushUndo({ label: `Renommage « ${before.name} » → « ${renameValue.trim()} »`, undo: () => saveRecord('groups', before) })
    setRenaming(null); setRenameValue('')
  }

  async function supprimer(group) {
    const before = { ...group }
    await saveRecord('groups', { ...before, archived: true }) // suppression douce : réversible
    pushUndo({ label: `Suppression du groupe « ${before.name} »`, undo: () => saveRecord('groups', { ...before, archived: false }) })
  }

  async function annulerDerniere() {
    const last = history[history.length - 1]
    if (!last) return
    await last.undo()
    setHistory(h => h.slice(0, -1))
  }

  return (
    <div>
      <h2>Groupes</h2>

      <form onSubmit={creer} className="card" style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input placeholder="Nom du nouveau groupe" value={nom} onChange={e => setNom(e.target.value)}
          style={{ flex: 1, padding: '10px 12px', borderRadius: 10, border: '1.5px solid #d1d5db' }} />
        <button className="btn" type="submit">Créer le groupe</button>
      </form>

      {history.length > 0 && (
        <div className="card" style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Dernière action : {history[history.length - 1].label}</span>
          <button className="btn secondary" onClick={annulerDerniere}>↩️ Annuler cette action</button>
        </div>
      )}

      <div className="grid">
        {groups.map(g => (
          <div className="card" key={g.id}>
            {renaming === g.id ? (
              <div style={{ display: 'flex', gap: 6 }}>
                <input value={renameValue} onChange={e => setRenameValue(e.target.value)}
                  style={{ flex: 1, padding: '8px 10px', borderRadius: 8, border: '1.5px solid #d1d5db' }} />
                <button className="btn" onClick={() => renommer(g)}>OK</button>
              </div>
            ) : (
              <>
                <h3 style={{ margin: '0 0 10px' }}>{g.name}</h3>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn secondary" onClick={() => { setRenaming(g.id); setRenameValue(g.name) }}>Renommer</button>
                  <button className="btn danger" onClick={() => supprimer(g)}>Supprimer</button>
                </div>
              </>
            )}
          </div>
        ))}
        {groups.length === 0 && <p style={{ color: 'var(--muted)' }}>Aucun groupe pour l'instant.</p>}
      </div>
    </div>
  )
}
