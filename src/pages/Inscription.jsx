import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import PasswordInput from '../components/PasswordInput'
import { NIVEAUX_INFO } from '../data/testQuestions'

const NIVEAUX_LINGUISTIQUES = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

export default function Inscription() {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', password: '',
    niveauLinguistique: 'A1', niveauInformatique: 'debutant'
  })
  const [voulTest, setVoulTest] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k) => (v) => setForm(f => ({ ...f, [k]: v }))

  async function handleSubmit(e) {
    e.preventDefault()
    setError(''); setLoading(true)
    try {
      if (voulTest) {
        // On stocke temporairement les infos et on part faire le test
        sessionStorage.setItem('inscription_en_attente', JSON.stringify(form))
        navigate('/test-positionnement')
        return
      }
      await signUp(form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="card">
        <h2>Créer mon compte stagiaire</h2>
        {error && <p style={{ color: 'var(--red)' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Prénom</label>
            <input required value={form.prenom} onChange={e => set('prenom')(e.target.value)} />
          </div>
          <div className="form-field">
            <label>Nom</label>
            <input required value={form.nom} onChange={e => set('nom')(e.target.value)} />
          </div>
          <div className="form-field">
            <label>Adresse mail</label>
            <input required type="email" value={form.email} onChange={e => set('email')(e.target.value)} />
          </div>
          <PasswordInput value={form.password} onChange={set('password')} />

          <div className="form-field">
            <label>Niveau linguistique</label>
            <select value={form.niveauLinguistique} onChange={e => set('niveauLinguistique')(e.target.value)}>
              {NIVEAUX_LINGUISTIQUES.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <div className="form-field">
            <label>Niveau informatique</label>
            <select value={form.niveauInformatique} onChange={e => set('niveauInformatique')(e.target.value)}>
              {Object.entries(NIVEAUX_INFO).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
          </div>

          <div className="form-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" id="test" checked={voulTest} onChange={e => setVoulTest(e.target.checked)} style={{ width: 18, height: 18 }} />
            <label htmlFor="test" style={{ fontWeight: 400 }}>
              Je préfère faire un test de positionnement pour déterminer mon niveau informatique
            </label>
          </div>

          <button className="btn" type="submit" disabled={loading} style={{ width: '100%' }}>
            {voulTest ? 'Continuer vers le test' : loading ? 'Création…' : 'Créer mon compte'}
          </button>
        </form>
        <p style={{ marginTop: 14 }}>Déjà inscrit ? <Link to="/connexion">Se connecter</Link></p>
      </div>
    </div>
  )
}
