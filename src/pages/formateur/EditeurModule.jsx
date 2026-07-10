import { useEffect, useState } from 'react'
import { getAllModules, getModule } from '../../data/getModuleContent'
import { saveRecord } from '../../lib/sync'
import { db } from '../../lib/db'
import { ICON_MAP } from '../../components/icons'

const VISUAL_OPTIONS = ['', ...Object.keys(ICON_MAP)]

export default function EditeurModule() {
  const [modules, setModules] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [form, setForm] = useState(null)
  const [savedMessage, setSavedMessage] = useState(null)

  useEffect(() => { getAllModules().then(setModules) }, [])

  async function selectionner(id) {
    setSelectedId(id)
    const m = await getModule(id)
    setForm({
      title: m.title,
      description: m.description,
      steps: m.steps || [],
      documents: m.documents || [],
      quiz: m.quiz || [],
      history: m.history || []
    })
  }

  // ---- Étapes ----
  function updateStep(i, key, value) {
    setForm(f => ({ ...f, steps: f.steps.map((s, idx) => idx === i ? { ...s, [key]: value } : s) }))
  }
  function ajouterEtape() {
    setForm(f => ({ ...f, steps: [...f.steps, { title: '', text: '', visual: '' }] }))
  }
  function supprimerEtape(i) {
    setForm(f => ({ ...f, steps: f.steps.filter((_, idx) => idx !== i) }))
  }

  // ---- Documents à préparer ----
  function updateDocument(i, value) {
    setForm(f => ({ ...f, documents: f.documents.map((d, idx) => idx === i ? value : d) }))
  }
  function ajouterDocument() {
    setForm(f => ({ ...f, documents: [...f.documents, ''] }))
  }
  function supprimerDocument(i) {
    setForm(f => ({ ...f, documents: f.documents.filter((_, idx) => idx !== i) }))
  }

  // ---- Quiz ----
  function ajouterQuestion() {
    setForm(f => ({ ...f, quiz: [...f.quiz, { question: '', options: ['', ''], correctIndex: 0 }] }))
  }
  function supprimerQuestion(qi) {
    setForm(f => ({ ...f, quiz: f.quiz.filter((_, idx) => idx !== qi) }))
  }
  function updateQuestionText(qi, value) {
    setForm(f => ({ ...f, quiz: f.quiz.map((q, idx) => idx === qi ? { ...q, question: value } : q) }))
  }
  function updateOption(qi, oi, value) {
    setForm(f => ({
      ...f,
      quiz: f.quiz.map((q, idx) => idx === qi ? { ...q, options: q.options.map((o, oidx) => oidx === oi ? value : o) } : q)
    }))
  }
  function ajouterOption(qi) {
    setForm(f => ({ ...f, quiz: f.quiz.map((q, idx) => idx === qi ? { ...q, options: [...q.options, ''] } : q) }))
  }
  function supprimerOption(qi, oi) {
    setForm(f => ({
      ...f,
      quiz: f.quiz.map((q, idx) => {
        if (idx !== qi) return q
        const options = q.options.filter((_, oidx) => oidx !== oi)
        const correctIndex = q.correctIndex >= options.length ? 0 : q.correctIndex
        return { ...q, options, correctIndex }
      })
    }))
  }
  function setCorrectOption(qi, oi) {
    setForm(f => ({ ...f, quiz: f.quiz.map((q, idx) => idx === qi ? { ...q, correctIndex: oi } : q) }))
  }

  async function enregistrer() {
    const existing = await db.moduleContent.get(selectedId)
    const previousVersion = existing
      ? { title: existing.title, description: existing.description, steps: existing.steps, documents: existing.documents, quiz: existing.quiz, savedAt: existing.updated_at }
      : null
    const newHistory = previousVersion ? [...(existing.history || []), previousVersion].slice(-10) : (existing?.history || [])

    // On ne garde que les documents et options non vides
    const cleanDocuments = form.documents.map(d => d.trim()).filter(Boolean)
    const cleanQuiz = form.quiz
      .map(q => ({ ...q, options: q.options.map(o => o.trim()).filter(Boolean) }))
      .filter(q => q.question.trim() && q.options.length >= 2)

    await saveRecord('moduleContent', {
      id: selectedId,
      title: form.title,
      description: form.description,
      steps: form.steps,
      documents: cleanDocuments,
      quiz: cleanQuiz,
      history: newHistory
    })
    const refreshed = await getAllModules()
    setModules(refreshed)
    setSavedMessage('Module enregistré ✓')
    setTimeout(() => setSavedMessage(null), 2500)
  }

  async function revenirVersion(version) {
    if (!confirm(`Revenir à la version du ${new Date(version.savedAt).toLocaleString('fr-FR')} ?`)) return
    setForm(f => ({
      ...f,
      title: version.title,
      description: version.description,
      steps: version.steps || [],
      documents: version.documents || [],
      quiz: version.quiz || []
    }))
  }

  return (
    <div className="two-col-layout" style={{ gridTemplateColumns: '260px 1fr' }}>
      <div className="card">
        <h3>Modules</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4, maxHeight: 600, overflowY: 'auto' }}>
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

            {/* ---- Documents à préparer ---- */}
            <h4>📋 Documents à préparer</h4>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginTop: -6 }}>Affiché en haut du module, avant les étapes.</p>
            {form.documents.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                <input
                  value={d}
                  placeholder="Ex : Pièce d'identité"
                  onChange={e => updateDocument(i, e.target.value)}
                  style={{ flex: 1, padding: '6px 8px', borderRadius: 6, border: '1px solid #d1d5db' }}
                />
                <button className="btn danger" onClick={() => supprimerDocument(i)}>✕</button>
              </div>
            ))}
            <button className="btn secondary" onClick={ajouterDocument}>+ Ajouter un document</button>

            {/* ---- Étapes ---- */}
            <h4 style={{ marginTop: 24 }}>Étapes</h4>
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
                  style={{ width: '100%', padding: '6px 8px', borderRadius: 6, border: '1px solid #d1d5db', marginBottom: 6 }}
                />
                <label style={{ fontSize: '.85rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Icône d'illustration :
                  <select value={s.visual || ''} onChange={e => updateStep(i, 'visual', e.target.value)}>
                    {VISUAL_OPTIONS.map(v => <option key={v} value={v}>{v || '— aucune —'}</option>)}
                  </select>
                </label>
                <button className="btn danger" style={{ marginTop: 6 }} onClick={() => supprimerEtape(i)}>Supprimer l'étape</button>
              </div>
            ))}
            <button className="btn secondary" onClick={ajouterEtape}>+ Ajouter une étape</button>

            {/* ---- Quiz ---- */}
            <h4 style={{ marginTop: 24 }}>✏️ Quiz de vérification (facultatif)</h4>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginTop: -6 }}>
              S'il n'y a aucune question, le stagiaire verra une auto-évaluation simple à la place.
            </p>
            {form.quiz.map((q, qi) => (
              <div className="step-card" key={qi}>
                <input
                  placeholder="Question"
                  value={q.question}
                  onChange={e => updateQuestionText(qi, e.target.value)}
                  style={{ width: '100%', marginBottom: 8, padding: '6px 8px', borderRadius: 6, border: '1px solid #d1d5db' }}
                />
                {q.options.map((opt, oi) => (
                  <div key={oi} style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                    <input
                      type="radio"
                      name={`correct-${qi}`}
                      checked={q.correctIndex === oi}
                      onChange={() => setCorrectOption(qi, oi)}
                      title="Marquer comme bonne réponse"
                    />
                    <input
                      value={opt}
                      placeholder={`Option ${oi + 1}`}
                      onChange={e => updateOption(qi, oi, e.target.value)}
                      style={{ flex: 1, padding: '6px 8px', borderRadius: 6, border: '1px solid #d1d5db' }}
                    />
                    {q.options.length > 2 && (
                      <button className="btn danger" onClick={() => supprimerOption(qi, oi)}>✕</button>
                    )}
                  </div>
                ))}
                <button className="btn ghost" onClick={() => ajouterOption(qi)}>+ Ajouter une option</button>
                <button className="btn danger" style={{ marginTop: 6, display: 'block' }} onClick={() => supprimerQuestion(qi)}>Supprimer la question</button>
              </div>
            ))}
            <button className="btn secondary" onClick={ajouterQuestion}>+ Ajouter une question</button>

            <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'center' }}>
              <button className="btn" onClick={enregistrer}>Enregistrer les modifications</button>
              {savedMessage && <span style={{ color: 'var(--green)', fontWeight: 600 }}>{savedMessage}</span>}
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
