import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getModule } from '../../data/getModuleContent'
import { useAuthStore } from '../../store/authStore'
import { logActivity } from '../../lib/activity'
import { exportModuleToPdf } from '../../lib/pdf'
import { saveRecord } from '../../lib/sync'
import { db, uid } from '../../lib/db'

export default function ModulePage() {
  const { id } = useParams()
  const { user } = useAuthStore()
  const [module, setModule] = useState(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    getModule(id).then(setModule)
    logActivity(user.id, `Consulte le module`, id)
  }, [id])

  useEffect(() => {
    db.moduleProgress.filter(p => p.user_id === user.id && p.module_id === id).first().then(p => setDone(!!p?.completed))
  }, [id])

  if (!module) return <p>Chargement…</p>

  async function marquerTermine() {
    await saveRecord('moduleProgress', {
      id: uid(), user_id: user.id, module_id: id, completed: true, completed_at: new Date().toISOString()
    })
    setDone(true)
    await logActivity(user.id, 'A terminé le module', id)
  }

  return (
    <div>
      <Link to="/dashboard">&larr; Retour aux modules</Link>
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h2>{module.icon} {module.title}</h2>
            <p>{module.description}</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn secondary" onClick={() => exportModuleToPdf(module)}>🖨️ Imprimer en PDF</button>
            {!done && <button className="btn" onClick={marquerTermine}>Marquer comme terminé</button>}
            {done && <span className="badge online">Terminé ✓</span>}
          </div>
        </div>

        {(module.steps || []).length === 0 && (
          <p style={{ color: 'var(--muted)', marginTop: 20 }}>
            Le contenu détaillé de ce module sera bientôt ajouté par votre formateur.
          </p>
        )}

        {(module.steps || []).map((s, i) => (
          <div className="step-card" key={i}>
            <h4>{i + 1}. {s.title}</h4>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
