import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import ModuleCard from '../../components/ModuleCard'
import { getAllModules } from '../../data/getModuleContent'
import { CATEGORIES } from '../../data/modules'
import { useAuthStore } from '../../store/authStore'
import { logActivity } from '../../lib/activity'
import { db } from '../../lib/db'

export default function Dashboard() {
  const { user } = useAuthStore()
  const [modules, setModules] = useState([])

  useEffect(() => {
    getAllModules().then(setModules)
    logActivity(user.id, 'Consulte son tableau de bord')
  }, [])

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
    ? modules.filter(m => assigned.includes(m.id))
    : modules

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
