import { Link } from 'react-router-dom'
import { hutColorFor } from '../lib/hutColors'

export default function ModuleCard({ module, completed }) {
  return (
    <Link to={`/module/${module.id}`} className="module-card" style={{ '--hut-color': hutColorFor(module.id) }}>
      {completed && <span className="check" title="Module terminé">✓</span>}
      <span className="icon-badge">{module.icon}</span>
      <h3>{module.title}</h3>
      {module.titleFr && <p className="fr-subtitle">{module.titleFr}</p>}
      <p>{module.description}</p>
    </Link>
  )
}
