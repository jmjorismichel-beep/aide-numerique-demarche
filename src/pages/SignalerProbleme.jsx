import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { saveRecord } from '../lib/sync'
import { uid } from '../lib/db'

export default function SignalerProbleme() {
  const { user } = useAuthStore()
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!message.trim()) return
    setError('')
    try {
      await saveRecord('bugReports', {
        id: uid(),
        user_id: user.id,
        user_name: `${user.prenom} ${user.nom}`,
        message: message.trim(),
        page: window.location.pathname,
        status: 'nouveau',
        created_at: new Date().toISOString()
      })
      setSent(true)
      setMessage('')
    } catch (e) {
      setError("Le signalement n'a pas pu être envoyé. Réessaie, ou préviens ton formateur directement.")
    }
  }

  return (
    <div className="auth-page">
      <div className="card">
        <h2>🐞 Signaler un problème</h2>
        <p style={{ color: 'var(--muted)' }}>
          Décris ce qui ne fonctionne pas ou ce qui te semble bizarre sur le site. Un formateur pourra voir ton message.
        </p>
        {sent && <p style={{ color: 'var(--green)' }}>Merci, ton signalement a bien été envoyé !</p>}
        {error && <p style={{ color: 'var(--red)' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Que se passe-t-il ?</label>
            <textarea rows={5} value={message} onChange={e => setMessage(e.target.value)}
              placeholder="Ex : Quand je clique sur « Imprimer en PDF » sur le module CAF, rien ne se passe." />
          </div>
          <button className="btn" type="submit" style={{ width: '100%' }}>Envoyer le signalement</button>
        </form>
      </div>
    </div>
  )
}
