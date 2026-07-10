import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../lib/db'
import { DEFAULT_MODULES } from '../../data/modules'

const moduleTitle = (id) => DEFAULT_MODULES.find(m => m.id === id)?.title || id

export default function FormateurDashboard() {
  const stagiaires = useLiveQuery(() => db.users.filter(u => u.role === 'stagiaire' && !u.archived).toArray()) || []
  const logs = useLiveQuery(() => db.activityLogs.orderBy('created_at').reverse().limit(200).toArray()) || []

  const lastActionByUser = {}
  for (const log of logs) {
    if (!lastActionByUser[log.user_id]) lastActionByUser[log.user_id] = log
  }

  return (
    <div>
      <h2>Activité des stagiaires</h2>
      <div className="card">
        <table className="table-simple">
          <thead>
            <tr><th>Stagiaire</th><th>Dernière action</th><th>Module</th><th>Horodatage</th></tr>
          </thead>
          <tbody>
            {stagiaires.map(s => {
              const last = lastActionByUser[s.id]
              return (
                <tr key={s.id}>
                  <td>{s.prenom} {s.nom}</td>
                  <td>{last ? last.action : '—'}</td>
                  <td>{last?.module_id ? moduleTitle(last.module_id) : '—'}</td>
                  <td>{last ? new Date(last.created_at).toLocaleString('fr-FR') : '—'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: 30 }}>Journal complet</h2>
      <div className="card">
        <table className="table-simple">
          <thead><tr><th>Stagiaire</th><th>Action</th><th>Horodatage</th></tr></thead>
          <tbody>
            {logs.slice(0, 50).map(log => {
              const s = stagiaires.find(s => s.id === log.user_id)
              return (
                <tr key={log.id}>
                  <td>{s ? `${s.prenom} ${s.nom}` : log.user_id}</td>
                  <td>{log.action}{log.module_id ? ` — ${moduleTitle(log.module_id)}` : ''}</td>
                  <td>{new Date(log.created_at).toLocaleString('fr-FR')}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
