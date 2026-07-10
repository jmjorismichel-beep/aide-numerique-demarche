import { Link } from 'react-router-dom'

export default function ModuleCard({ module, completed }) {
  return (
    <Link to={`/module/${module.id}`} className="module-card">
      {completed && <span className="check" title="Module terminé">✓</span>}
      <span className="icon">{module.icon}</span>
      <h3>{module.title}</h3>
      <p>{module.description}</p>
    </Link>
  )
}
