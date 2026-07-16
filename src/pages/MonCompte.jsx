import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export default function MonCompte() {
  const { user, deleteMyAccount } = useAuthStore()
  const navigate = useNavigate()
  const [confirming, setConfirming] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    setLoading(true); setError('')
    try {
      await deleteMyAccount()
      navigate('/inscription')
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>👤 Mon compte</h2>
      <div className="card" style={{ marginBottom: 20 }}>
        <p><strong>Prénom :</strong> {user.prenom}</p>
        <p><strong>Nom :</strong> {user.nom}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>Rôle :</strong> {user.role === 'formateur' ? 'Formateur' : 'Stagiaire'}</p>
      </div>

      <div className="card" style={{ borderLeft: '4px solid var(--red)' }}>
        <h3 style={{ color: 'var(--red)', marginTop: 0 }}>Supprimer mon compte</h3>
        <p style={{ color: 'var(--muted)' }}>
          Cette action supprime définitivement ton compte et tes données personnelles. Ta progression et tes messages ne pourront pas être récupérés.
        </p>
        {error && <p style={{ color: 'var(--red)' }}>{error}</p>}
        {!confirming ? (
          <button className="btn danger" onClick={() => setConfirming(true)}>Supprimer mon compte</button>
        ) : (
          <div>
            <p style={{ fontWeight: 700 }}>Es-tu sûr ? Cette action est irréversible.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn secondary" onClick={() => setConfirming(false)}>Annuler</button>
              <button className="btn danger" onClick={handleDelete} disabled={loading}>
                {loading ? 'Suppression…' : 'Oui, supprimer définitivement'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
