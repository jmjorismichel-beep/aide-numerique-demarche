import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import PasswordInput from '../components/PasswordInput'
import { translateAuthError } from '../lib/authErrors'

export default function Connexion() {
  const navigate = useNavigate()
  const { signIn, resetPassword } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [modeOubli, setModeOubli] = useState(false)
  const [resetEmail, setResetEmail] = useState('')
  const [resetMessage, setResetMessage] = useState('')
  const [resetError, setResetError] = useState('')
  const [resetLoading, setResetLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(''); setLoading(true)
    try {
      const user = await signIn({ email, password })
      navigate(user.role === 'formateur' ? '/formateur' : '/dashboard')
    } catch (err) {
      setError(translateAuthError(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleReset(e) {
    e.preventDefault()
    setResetError(''); setResetMessage(''); setResetLoading(true)
    try {
      await resetPassword(resetEmail)
      setResetMessage("Un email pour réinitialiser ton mot de passe a été envoyé. Vérifie ta boîte de réception (et tes spams).")
    } catch (err) {
      setResetError(translateAuthError(err))
    } finally {
      setResetLoading(false)
    }
  }

  if (modeOubli) {
    return (
      <div className="auth-page">
        <div className="card">
          <h2>Mot de passe oublié</h2>
          <p style={{ color: 'var(--muted)' }}>Indique ton adresse email, on t'envoie un lien pour créer un nouveau mot de passe.</p>
          {resetError && <p style={{ color: 'var(--red)' }}>{resetError}</p>}
          {resetMessage && <p style={{ color: 'var(--green)' }}>{resetMessage}</p>}
          {!resetMessage && (
            <form onSubmit={handleReset}>
              <div className="form-field">
                <label>Adresse mail</label>
                <input required type="email" value={resetEmail} onChange={e => setResetEmail(e.target.value)} />
              </div>
              <button className="btn" type="submit" disabled={resetLoading} style={{ width: '100%' }}>
                {resetLoading ? 'Envoi…' : 'Envoyer le lien de réinitialisation'}
              </button>
            </form>
          )}
          <p style={{ marginTop: 14 }}>
            <button className="btn ghost" onClick={() => { setModeOubli(false); setResetMessage(''); setResetError('') }}>
              &larr; Retour à la connexion
            </button>
          </p>
        </div>
      </div>
    )
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
          <p style={{ marginTop: -6, marginBottom: 14 }}>
            <button type="button" className="btn ghost" style={{ padding: 0, fontSize: '.85rem' }}
              onClick={() => { setModeOubli(true); setResetEmail(email) }}>
              Mot de passe oublié ?
            </button>
          </p>
          <button className="btn" type="submit" disabled={loading} style={{ width: '100%' }}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
        <p style={{ marginTop: 14 }}>Pas encore de compte ? <Link to="/inscription">S'inscrire</Link></p>
      </div>
    </div>
  )
}
