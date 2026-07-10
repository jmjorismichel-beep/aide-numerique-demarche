import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PARCOURS } from '../../data/parcoursConseilles'
import { getAllModules } from '../../data/getModuleContent'

export default function ParcoursConseille() {
  const [modules, setModules] = useState([])
  const [openId, setOpenId] = useState(null)

  useEffect(() => { getAllModules().then(setModules) }, [])

  const moduleById = Object.fromEntries(modules.map(m => [m.id, m]))

  return (
    <div>
      <h2>🧭 Par où commencer ?</h2>
      <p style={{ color: 'var(--muted)' }}>Choisis la situation qui te correspond le mieux pour voir un ordre conseillé de modules.</p>

      {PARCOURS.map(p => (
        <div className="card" key={p.id} style={{ marginBottom: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => setOpenId(openId === p.id ? null : p.id)}>
            <div>
              <h3 style={{ margin: '0 0 4px' }}>{p.title}</h3>
              <p style={{ margin: 0, color: 'var(--muted)' }}>{p.description}</p>
            </div>
            <span style={{ fontSize: '1.4rem' }}>{openId === p.id ? '−' : '+'}</span>
          </div>

          {openId === p.id && (
            <ol style={{ marginTop: 16, paddingLeft: 20 }}>
              {p.steps.map((s, i) => {
                const m = moduleById[s.moduleId]
                if (!m) return null
                return (
                  <li key={i} style={{ marginBottom: 14 }}>
                    <Link to={`/module/${m.id}`} style={{ fontWeight: 600 }}>{m.icon} {m.title}</Link>
                    <p style={{ margin: '4px 0 0', color: 'var(--muted)', fontSize: '.9rem' }}>{s.note}</p>
                  </li>
                )
              })}
            </ol>
          )}
        </div>
      ))}
    </div>
  )
}
