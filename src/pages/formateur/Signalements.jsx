import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../lib/db'
import { saveRecord } from '../../lib/sync'

export default function Signalements() {
  const reports = useLiveQuery(() => db.bugReports.orderBy('created_at').reverse().toArray()) || []

  async function marquerResolu(report) {
    await saveRecord('bugReports', { ...report, status: report.status === 'resolu' ? 'nouveau' : 'resolu' })
  }

  return (
    <div>
      <h2>🐞 Signalements</h2>
      <p style={{ color: 'var(--muted)' }}>Problèmes signalés par les stagiaires et les formateurs.</p>
      <div className="card">
        {reports.length === 0 && <p style={{ color: 'var(--muted)' }}>Aucun signalement pour l'instant.</p>}
        {reports.map(r => (
          <div key={r.id} style={{ padding: '12px 0', borderBottom: '1px solid #e5e7eb', opacity: r.status === 'resolu' ? .5 : 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
              <strong>{r.user_name}</strong>
              <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{new Date(r.created_at).toLocaleString('fr-FR')} — page {r.page}</span>
            </div>
            <p style={{ margin: '6px 0' }}>{r.message}</p>
            <button className="btn secondary" onClick={() => marquerResolu(r)}>
              {r.status === 'resolu' ? 'Marquer comme non résolu' : 'Marquer comme résolu'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
