import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { NIVEAUX_INFO } from '../data/testQuestions'

const NIVEAUX_LINGUISTIQUES = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export default function MonCompte() {
  const { user, deleteMyAccount, updateProfile } = useAuthStore()
  const navigate = useNavigate()
  const [confirming, setConfirming] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [niveauLinguistique, setNiveauLinguistique] = useState(user.niveau_linguistique || 'A1')
  const [niveauInformatique, setNiveauInformatique] = useState(user.niveau_informatique || 'debutant')
  const [savingNiveaux, setSavingNiveaux] = useState(false)
  const [niveauxMessage, setNiveauxMessage] = useState('')

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

  async function enregistrerNiveaux() {
    setSavingNiveaux(true); setNiveauxMessage('')
    try {
      await updateProfile({ niveau_linguistique: niveauLinguistique, niveau_informatique: niveauInformatique })
      setNiveauxMessage('Enregistré ✓')
      setTimeout(() => setNiveauxMessage(''), 2500)
    } catch (e) {
      setNiveauxMessage("Erreur, réessaie.")
    } finally {
      setSavingNiveaux(false)
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

      {user.role === 'stagiaire' && (
        <div className="card" style={{ marginBottom: 20 }}>
          <h3 style={{ marginTop: 0 }}>Mes niveaux</h3>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
            Ces niveaux ont été fixés à ton inscription (ou via le test de positionnement). Tu peux les modifier ici à tout moment — les modules s'adaptent automatiquement, avec un texte plus simple si besoin.
          </p>
          <div className="form-field">
            <label>Niveau linguistique</label>
            <select value={niveauLinguistique} onChange={e => setNiveauLinguistique(e.target.value)}>
              {NIVEAUX_LINGUISTIQUES.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>
          <div className="form-field">
            <label>Niveau informatique</label>
            <select value={niveauInformatique} onChange={e => setNiveauInformatique(e.target.value)}>
              {Object.entries(NIVEAUX_INFO).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button className="btn" onClick={enregistrerNiveaux} disabled={savingNiveaux}>
              {savingNiveaux ? 'Enregistrement…' : 'Enregistrer'}
            </button>
            {niveauxMessage && <span style={{ color: niveauxMessage.startsWith('Erreur') ? 'var(--red)' : 'var(--green)', fontWeight: 600 }}>{niveauxMessage}</span>}
          </div>
        </div>
      )}

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
