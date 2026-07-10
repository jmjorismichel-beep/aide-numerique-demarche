import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../lib/db'
import { saveRecord, deleteRecord } from '../../lib/sync'

export default function Stagiaires() {
  const stagiaires = useLiveQuery(() => db.users.filter(u => u.role === 'stagiaire').toArray()) || []
  const groups = useLiveQuery(() => db.groups.filter(g => !g.archived).toArray()) || []
  const [history, setHistory] = useState([])
  const [filtre, setFiltre] = useState('actifs')

  function pushUndo(action) { setHistory(h => [...h.slice(-9), action]) }

  async function changerGroupe(stagiaire, groupId) {
    const before = { ...stagiaire }
    await saveRecord('users', { ...stagiaire, group_id: groupId || null })
    const groupName = groups.find(g => g.id === groupId)?.name || 'aucun groupe'
    pushUndo({ label: `${stagiaire.prenom} déplacé vers « ${groupName} »`, undo: () => saveRecord('users', before) })
  }

  async function archiver(stagiaire) {
    const before = { ...stagiaire }
    await saveRecord('users', { ...stagiaire, archived: true })
    pushUndo({ label: `${stagiaire.prenom} ${stagiaire.nom} archivé`, undo: () => saveRecord('users', before) })
  }

  async function desarchiver(stagiaire) {
    const before = { ...stagiaire }
    await saveRecord('users', { ...stagiaire, archived: false })
    pushUndo({ label: `${stagiaire.prenom} ${stagiaire.nom} désarchivé`, undo: () => saveRecord('users', before) })
  }

  async function supprimerDefinitivement(stagiaire) {
    if (!confirm(`Supprimer DÉFINITIVEMENT ${stagiaire.prenom} ${stagiaire.nom} ? Cette action ne pourra pas être annulée automatiquement (préférez « Archiver »).`)) return
    await deleteRecord('users', stagiaire.id)
  }

  async function annulerDerniere() {
    const last = history[history.length - 1]
    if (!last) return
    await last.undo()
    setHistory(h => h.slice(0, -1))
  }

  const visibles = stagiaires.filter(s => filtre === 'actifs' ? !s.archived : s.archived)

  return (
    <div>
      <h2>Stagiaires</h2>

      <div className="tabs" style={{ maxWidth: 320 }}>
        <button className={filtre === 'actifs' ? 'active' : ''} onClick={() => setFiltre('actifs')}>Actifs</button>
        <button className={filtre === 'archives' ? 'active' : ''} onClick={() => setFiltre('archives')}>Archivés</button>
      </div>

      {history.length > 0 && (
        <div className="card" style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Dernière action : {history[history.length - 1].label}</span>
          <button className="btn secondary" onClick={annulerDerniere}>↩️ Annuler cette action</button>
        </div>
      )}

      <div className="card">
        <table className="table-simple">
          <thead>
            <tr><th>Nom</th><th>Niveau</th><th>Groupe</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {visibles.map(s => (
              <tr key={s.id}>
                <td>{s.prenom} {s.nom}<br /><small style={{ color: 'var(--muted)' }}>{s.email}</small></td>
                <td>{s.niveau_linguistique}</td>
                <td>
                  <select value={s.group_id || ''} onChange={e => changerGroupe(s, e.target.value)} disabled={s.archived}>
                    <option value="">— Aucun groupe —</option>
                    {groups.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                  </select>
                </td>
                <td style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {!s.archived
                    ? <button className="btn secondary" onClick={() => archiver(s)}>Archiver</button>
                    : <button className="btn secondary" onClick={() => desarchiver(s)}>Désarchiver</button>}
                  <button className="btn danger" onClick={() => supprimerDefinitivement(s)}>Supprimer</button>
                </td>
              </tr>
            ))}
            {visibles.length === 0 && <tr><td colSpan={4} style={{ color: 'var(--muted)' }}>Aucun stagiaire dans cette liste.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
