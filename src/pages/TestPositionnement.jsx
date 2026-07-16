import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { getTestQuestions, getResponseScale, scoreToNiveau, NIVEAUX_INFO } from '../data/testQuestions'
import { translateAuthError } from '../lib/authErrors'

export default function TestPositionnement() {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()
  const pending = useMemo(() => JSON.parse(sessionStorage.getItem('inscription_en_attente') || 'null'), [])
  const questions = useMemo(() => getTestQuestions(pending?.niveauLinguistique || 'A2'), [pending])
  const scale = useMemo(() => getResponseScale(pending?.niveauLinguistique || 'A2'), [pending])
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!pending) {
    return <div className="container"><p>Aucune inscription en attente. <a href="/inscription">Retour à l'inscription</a></p></div>
  }

  function answer(value) {
    const next = [...answers, value]
    setAnswers(next)
    if (step + 1 < questions.length) {
      setStep(step + 1)
    } else {
      const score = next.reduce((a, b) => a + b, 0)
      setResult(scoreToNiveau(score))
    }
  }

  function precedent() {
    if (step === 0) return
    setAnswers(a => a.slice(0, -1))
    setStep(s => s - 1)
  }

  async function finaliser() {
    setLoading(true); setError('')
    try {
      await signUp({ ...pending, niveauInformatique: result })
      sessionStorage.removeItem('inscription_en_attente')
      navigate('/dashboard')
    } catch (err) {
      setError(translateAuthError(err))
    } finally {
      setLoading(false)
    }
  }

  if (result) {
    return (
      <div className="auth-page">
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>Résultat du test</h2>
          <p>D'après tes réponses, ton niveau informatique estimé est :</p>
          <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--sea)' }}>{NIVEAUX_INFO[result]}</p>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
            Ce n'est qu'une première estimation : ton formateur pourra l'ajuster au fil des séances.
          </p>
          {error && <p style={{ color: 'var(--red)' }}>{error}</p>}
          <button className="btn" onClick={finaliser} disabled={loading} style={{ marginTop: 12 }}>
            {loading ? 'Création du compte…' : 'Valider et créer mon compte'}
          </button>
        </div>
      </div>
    )
  }

  const q = questions[step]
  return (
    <div className="auth-page">
      <div className="card">
        <h2>Test de positionnement ({step + 1}/{questions.length})</h2>
        <p style={{ color: 'var(--muted)', fontSize: '.85rem', marginTop: -6 }}>
          Réponds honnêtement : ce n'est pas un examen, ça sert juste à mieux t'accompagner.
        </p>
        <p style={{ fontSize: '1.1rem', fontWeight: 600, marginTop: 16 }}>{q.text}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
          {scale.map(opt => (
            <button key={opt.value} className="btn secondary" onClick={() => answer(opt.value)}>{opt.label}</button>
          ))}
        </div>
        {step > 0 && (
          <button className="btn ghost" style={{ marginTop: 16 }} onClick={precedent}>← Revenir à la question précédente</button>
        )}
      </div>
    </div>
  )
}
