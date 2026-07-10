import { useState } from 'react'
import { GLOSSARY } from '../data/glossary'

export default function Glossaire() {
  const [query, setQuery] = useState('')
  const filtered = GLOSSARY.filter(g =>
    g.term.toLowerCase().includes(query.toLowerCase()) ||
    g.definition.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <h2>📖 Glossaire des mots administratifs</h2>
      <p style={{ color: 'var(--muted)' }}>Des mots que tu vas souvent rencontrer dans les démarches, expliqués simplement.</p>
      <input
        placeholder="Chercher un mot…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ width: '100%', maxWidth: 400, padding: '10px 14px', borderRadius: 10, border: '1.5px solid #d1d5db', marginBottom: 20 }}
      />
      <div className="card">
        {filtered.length === 0 && <p style={{ color: 'var(--muted)' }}>Aucun mot ne correspond à ta recherche.</p>}
        {filtered.map((g, i) => (
          <div key={i} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < filtered.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
            <h4 style={{ margin: '0 0 6px', color: 'var(--blue-dark)' }}>{g.term}</h4>
            <p style={{ margin: 0 }}>{g.definition}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
