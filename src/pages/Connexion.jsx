import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import PasswordInput from '../components/PasswordInput'

export default function Connexion() {
  const navigate = useNavigate()
  const { signIn } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(''); setLoading(true)
    try {
      const user = await signIn({ email, password })
      navigate(user.role === 'formateur' ? '/formateur' : '/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="card">
        <h2>Connexion</h2>
        {error && <p style={{ color: 'var(--red)' }}>{error}</p>}
        {!navigator.onLine && (
          <p style={{ color: 'var(--orange)', fontSize: '.9rem' }}>
            Mode hors-ligne : la connexion fonctionne si vous vous êtes déjà connecté sur cet appareil.
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Adresse mail</label>
            <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <PasswordInput value={password} onChange={setPassword} />
          <button className="btn" type="submit" disabled={loading} style={{ width: '100%' }}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
        <p style={{ marginTop: 14 }}>Pas encore de compte ? <Link to="/inscription">S'inscrire</Link></p>
      </div>
    </div>
  )
}
