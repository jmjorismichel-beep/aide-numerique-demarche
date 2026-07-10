import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { getTestQuestions, scoreToNiveau, NIVEAUX_INFO } from '../data/testQuestions'
import { translateAuthError } from '../lib/authErrors'

export default function TestPositionnement() {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()
  const pending = useMemo(() => JSON.parse(sessionStorage.getItem('inscription_en_attente') || 'null'), [])
  const questions = useMemo(() => getTestQuestions(pending?.niveauLinguistique || 'A2'), [pending])
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!pending) {
    return <div className="container"><p>Aucune inscription en attente. <a href="/inscription">Retour à l'inscription</a></p></div>
  }

  function answer(index) {
    const next = [...answers, index === 0 ? 1 : 0] // simplification : 1ère option = bonne réponse
    setAnswers(next)
    if (step + 1 < questions.length) {
      setStep(step + 1)
    } else {
      const score = next.reduce((a, b) => a + b, 0)
      setResult(scoreToNiveau(score))
    }
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
          <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--blue)' }}>{NIVEAUX_INFO[result]}</p>
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
        <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{q.text}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
          {q.options.map((opt, i) => (
            <button key={i} className="btn secondary" onClick={() => answer(i)}>{opt}</button>
          ))}
        </div>
      </div>
    </div>
  )
}
