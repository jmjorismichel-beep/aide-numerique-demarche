import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../lib/db'
import { getAllModules } from '../../data/getModuleContent'

const ASSESSMENT_LABELS = {
  facile: '🙂 A réussi facilement',
  aide: '🤔 A eu besoin d\'aide',
  difficile: '😕 A trouvé ça difficile'
}

export default function Statistiques() {
  const [modules, setModules] = useState([])
  useEffect(() => { getAllModules().then(setModules) }, [])

  const stagiaires = useLiveQuery(() => db.users.filter(u => u.role === 'stagiaire' && !u.archived).toArray()) || []
  const progress = useLiveQuery(() => db.moduleProgress.filter(p => p.completed).toArray()) || []
  const avecRetour = useLiveQuery(() => db.moduleProgress.filter(p => !!p.self_assessment).toArray()) || []

  const totalStagiaires = stagiaires.length

  const rows = modules.map(m => {
    // On compte les stagiaires distincts, pas le nombre brut d'enregistrements
    // (un même stagiaire pouvait avoir plusieurs enregistrements pour un
    // même module avant un correctif — ça évite de gonfler artificiellement
    // les chiffres si d'anciens doublons subsistent).
    const completedCount = new Set(progress.filter(p => p.module_id === m.id).map(p => p.user_id)).size
    const pct = totalStagiaires > 0 ? Math.round((completedCount / totalStagiaires) * 100) : 0
    return { ...m, completedCount, pct }
  }).sort((a, b) => a.pct - b.pct) // modules les moins terminés en premier = les plus bloquants

  const globalCompletion = totalStagiaires > 0 && modules.length > 0
    ? Math.round((new Set(progress.map(p => `${p.user_id}__${p.module_id}`)).size / (totalStagiaires * modules.length)) * 100)
    : 0

  const moduleById = Object.fromEntries(modules.map(m => [m.id, m]))
  const stagiaireById = Object.fromEntries(stagiaires.map(s => [s.id, s]))
  const retours = avecRetour
    .map(p => ({ ...p, stagiaire: stagiaireById[p.user_id], module: moduleById[p.module_id] }))
    .filter(r => r.stagiaire && r.module) // exclut les comptes archivés/supprimés depuis
    .sort((a, b) => (b.completed_at || '').localeCompare(a.completed_at || ''))
    .slice(0, 30) // les 30 plus récents, pour rester lisible

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

      <h3 style={{ marginTop: 28 }}>💬 Retours des stagiaires</h3>
      <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
        Ce que les stagiaires répondent à « Comment ça s'est passé ? » à la fin d'un module — les 30 retours les plus récents. Utile pour repérer rapidement qui pourrait avoir besoin d'aide.
      </p>
      <div className="card">
        <table className="table-simple">
          <thead><tr><th>Stagiaire</th><th>Module</th><th>Retour</th><th>Date</th></tr></thead>
          <tbody>
            {retours.map(r => (
              <tr key={r.id}>
                <td>{r.stagiaire.prenom} {r.stagiaire.nom}</td>
                <td>{r.module.icon} {r.module.title}</td>
                <td style={{ fontWeight: r.self_assessment !== 'facile' ? 700 : 400, color: r.self_assessment === 'difficile' ? 'var(--red)' : r.self_assessment === 'aide' ? 'var(--orange)' : undefined }}>
                  {ASSESSMENT_LABELS[r.self_assessment] || r.self_assessment}
                </td>
                <td>{r.completed_at ? new Date(r.completed_at).toLocaleString('fr-FR') : '—'}</td>
              </tr>
            ))}
            {retours.length === 0 && <tr><td colSpan={4} style={{ color: 'var(--muted)' }}>Pas encore de retour de la part des stagiaires.</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
