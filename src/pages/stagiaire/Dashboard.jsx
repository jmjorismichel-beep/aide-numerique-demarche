import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import ModuleCard from '../../components/ModuleCard'
import { getAllModules } from '../../data/getModuleContent'
import { CATEGORIES } from '../../data/modules'
import { useAuthStore } from '../../store/authStore'
import { useI18nStore } from '../../store/i18nStore'
import { translateModule } from '../../data/translations/modules'
import { logActivity } from '../../lib/activity'
import { db } from '../../lib/db'
import VisiteGuidee, { tourDejaVue } from '../../components/VisiteGuidee'

export default function Dashboard() {
  const { user } = useAuthStore()
  const { lang } = useI18nStore()
  const [modules, setModules] = useState([])
  const [afficherTour, setAfficherTour] = useState(false)

  useEffect(() => {
    getAllModules().then(setModules)
    logActivity(user.id, 'Consulte son tableau de bord')
    if (!tourDejaVue()) setAfficherTour(true)
  }, [])

  const translatedModules = modules.map(m => translateModule(m, lang))

  const progress = useLiveQuery(
    () => db.moduleProgress.filter(p => p.user_id === user.id && p.completed).toArray(),
    [user.id]
  ) || []
  const completedIds = new Set(progress.map(p => p.module_id))

  const myGroup = useLiveQuery(
    () => user.group_id ? db.groups.get(user.group_id) : Promise.resolve(null),
    [user.group_id]
  )
  const assigned = myGroup?.assigned_modules
  const visibleModules = (assigned && assigned.length > 0)
    ? translatedModules.filter(m => assigned.includes(m.id))
    : translatedModules

  const total = visibleModules.length
  const done = visibleModules.filter(m => completedIds.has(m.id)).length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  const byCategory = Object.keys(CATEGORIES).map(cat => ({
    key: cat,
    label: CATEGORIES[cat],
    items: visibleModules.filter(m => m.category === cat)
  })).filter(cat => cat.items.length > 0)

  return (
    <div>
      {afficherTour && <VisiteGuidee onFinish={() => setAfficherTour(false)} />}
      <h2>Bonjour {user.prenom} 👋</h2>
      <p>Niveau linguistique : <strong>{user.niveau_linguistique}</strong> — Choisis un module pour commencer.</p>

      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <strong>Ma progression</strong>
          <span>{done} / {total} modules terminés</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {assigned && assigned.length > 0 && (
        <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
          Votre formateur a sélectionné {assigned.length} module(s) pour votre groupe.
        </p>
      )}

      {byCategory.map(cat => (
        <div key={cat.key}>
          <div className="category-title">{cat.label}</div>
          <div className="grid">
            {cat.items.map(m => <ModuleCard key={m.id} module={m} completed={completedIds.has(m.id)} />)}
          </div>
        </div>
      ))}
    </div>
  )
}
