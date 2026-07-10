import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../lib/db'
import { getAllModules } from '../../data/getModuleContent'

export default function Statistiques() {
  const [modules, setModules] = useState([])
  useEffect(() => { getAllModules().then(setModules) }, [])

  const stagiaires = useLiveQuery(() => db.users.filter(u => u.role === 'stagiaire' && !u.archived).toArray()) || []
  const progress = useLiveQuery(() => db.moduleProgress.filter(p => p.completed).toArray()) || []

  const totalStagiaires = stagiaires.length

  const rows = modules.map(m => {
    const completedCount = progress.filter(p => p.module_id === m.id).length
    const pct = totalStagiaires > 0 ? Math.round((completedCount / totalStagiaires) * 100) : 0
    return { ...m, completedCount, pct }
  }).sort((a, b) => a.pct - b.pct) // modules les moins terminés en premier = les plus bloquants

  const globalCompletion = totalStagiaires > 0 && modules.length > 0
    ? Math.round((progress.length / (totalStagiaires * modules.length)) * 100)
    : 0

  return (
    <div>
      <h2>Statistiques</h2>

      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <strong>Progression globale (tous stagiaires, tous modules)</strong>
          <span>{globalCompletion}%</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${globalCompletion}%` }} />
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginTop: 8 }}>
          {totalStagiaires} stagiaire(s) actif(s) · {modules.length} module(s) au catalogue
        </p>
      </div>

      <h3>Taux de complétion par module</h3>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Les modules les moins avancés apparaissent en premier — ce sont souvent les plus bloquants.</p>
      <div className="card">
        <table className="table-simple">
          <thead><tr><th>Module</th><th>Terminé par</th><th>Progression</th></tr></thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td>{r.icon} {r.title}</td>
                <td>{r.completedCount} / {totalStagiaires}</td>
                <td style={{ minWidth: 160 }}>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{ width: `${r.pct}%` }} />
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan={3} style={{ color: 'var(--muted)' }}>Pas encore de données.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
