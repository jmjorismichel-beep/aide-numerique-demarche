import { useEffect, useState } from 'react'
import ModuleCard from '../../components/ModuleCard'
import { getAllModules } from '../../data/getModuleContent'
import { CATEGORIES } from '../../data/modules'
import { useAuthStore } from '../../store/authStore'
import { logActivity } from '../../lib/activity'

export default function Dashboard() {
  const { user } = useAuthStore()
  const [modules, setModules] = useState([])

  useEffect(() => {
    getAllModules().then(setModules)
    logActivity(user.id, 'Consulte son tableau de bord')
  }, [])

  const byCategory = Object.keys(CATEGORIES).map(cat => ({
    key: cat,
    label: CATEGORIES[cat],
    items: modules.filter(m => m.category === cat)
  }))

  return (
    <div>
      <h2>Bonjour {user.prenom} 👋</h2>
      <p>Niveau linguistique : <strong>{user.niveau_linguistique}</strong> — Choisis un module pour commencer.</p>
      {byCategory.map(cat => (
        <div key={cat.key}>
          <div className="category-title">{cat.label}</div>
          <div className="grid">
            {cat.items.map(m => <ModuleCard key={m.id} module={m} />)}
          </div>
        </div>
      ))}
    </div>
  )
}
