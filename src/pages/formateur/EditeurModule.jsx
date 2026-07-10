import { useEffect, useState } from 'react'
import { getAllModules, getModule } from '../../data/getModuleContent'
import { saveRecord } from '../../lib/sync'
import { db } from '../../lib/db'

export default function EditeurModule() {
  const [modules, setModules] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [form, setForm] = useState(null)

  useEffect(() => { getAllModules().then(setModules) }, [])

  async function selectionner(id) {
    setSelectedId(id)
    const m = await getModule(id)
    setForm({ title: m.title, description: m.description, steps: m.steps || [], history: m.history || [] })
  }

  function updateStep(i, key, value) {
    setForm(f => ({ ...f, steps: f.steps.map((s, idx) => idx === i ? { ...s, [key]: value } : s) }))
  }
  function ajouterEtape() {
    setForm(f => ({ ...f, steps: [...f.steps, { title: '', text: '' }] }))
  }
  function supprimerEtape(i) {
    setForm(f => ({ ...f, steps: f.steps.filter((_, idx) => idx !== i) }))
  }

  async function enregistrer() {
    const existing = await db.moduleContent.get(selectedId)
    const previousVersion = existing
      ? { title: existing.title, description: existing.description, steps: existing.steps, savedAt: existing.updated_at }
      : null
    const newHistory = previousVersion ? [...(existing.history || []), previousVersion].slice(-10) : (existing?.history || [])

    await saveRecord('moduleContent', {
      id: selectedId,
      title: form.title,
      description: form.description,
      steps: form.steps,
      history: newHistory
    })
    const refreshed = await getAllModules()
    setModules(refreshed)
    alert('Module enregistré.')
  }

  async function revenirVersion(version) {
    if (!confirm(`Revenir à la version du ${new Date(version.savedAt).toLocaleString('fr-FR')} ?`)) return
    setForm(f => ({ ...f, title: version.title, description: version.description, steps: version.steps || [] }))
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 20 }}>
      <div className="card">
        <h3>Modules</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 500, overflowY: 'auto' }}>
          {modules.map(m => (
            <li key={m.id}>
              <button
                className="btn ghost"
                style={{ width: '100%', textAlign: 'left', background: selectedId === m.id ? '#eff6ff' : undefined }}
                onClick={() => selectionner(m.id)}
              >
                {m.icon} {m.title} {m.edited && <small style={{ color: 'var(--green)' }}>(modifié)</small>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        {!form && <p>Sélectionnez un module à modifier.</p>}
        {form && (
          <>
            <div className="form-field">
              <label>Titre</label>
              <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
            </div>
            <div className="form-field">
              <label>Description</label>
              <textarea rows={2} value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
            </div>

            <h4>Étapes</h4>
            {form.steps.map((s, i) => (
              <div className="step-card" key={i}>
                <input
                  placeholder="Titre de l'étape"
                  value={s.title}
                  onChange={e => updateStep(i, 'title', e.target.value)}
                  style={{ width: '100%', marginBottom: 6, padding: '6px 8px', borderRadius: 6, border: '1px solid #d1d5db' }}
                />
                <textarea
                  placeholder="Texte de l'étape"
                  rows={2}
                  value={s.text}
                  onChange={e => updateStep(i, 'text', e.target.value)}
                  style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #d1d5db' }}
                />
                <button className="btn danger" style={{ marginTop: 6 }} onClick={() => supprimerEtape(i)}>Supprimer l'étape</button>
              </div>
            ))}
            <button className="btn secondary" onClick={ajouterEtape}>+ Ajouter une étape</button>

            <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
              <button className="btn" onClick={enregistrer}>Enregistrer les modifications</button>
            </div>

            {form.history?.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h4>Versions précédentes (pour rectifier une erreur)</h4>
                <ul>
                  {[...form.history].reverse().map((v, i) => (
                    <li key={i} style={{ marginBottom: 6 }}>
                      {new Date(v.savedAt).toLocaleString('fr-FR')} — {v.title}
                      <button className="btn ghost" onClick={() => revenirVersion(v)}>↩️ Revenir à cette version</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
