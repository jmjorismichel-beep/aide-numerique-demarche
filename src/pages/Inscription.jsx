import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import PasswordInput from '../components/PasswordInput'
import { translateAuthError } from '../lib/authErrors'
import { NIVEAUX_INFO } from '../data/testQuestions'

const NIVEAUX_LINGUISTIQUES = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Inscription() {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', password: '', confirmPassword: '', inviteCode: '',
    niveauLinguistique: 'A1', niveauInformatique: 'debutant'
  })
  const [voulTest, setVoulTest] = useState(false)
  const [afficherCodeFormateur, setAfficherCodeFormateur] = useState(false)
  const [touched, setTouched] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const set = (k) => (v) => setForm(f => ({ ...f, [k]: v }))
  const markTouched = (k) => () => setTouched(t => ({ ...t, [k]: true }))

  // Validation en direct, affichée sous chaque champ une fois qu'on l'a quitté
  const emailError = touched.email && form.email && !EMAIL_REGEX.test(form.email)
    ? "Cette adresse email ne semble pas valide." : null
  const passwordError = touched.password && form.password && form.password.length < 6
    ? "Le mot de passe doit contenir au moins 6 caractères." : null
  const confirmError = touched.confirmPassword && form.confirmPassword && form.confirmPassword !== form.password
    ? "Les deux mots de passe ne sont pas identiques." : null

  const formValid = form.prenom.trim() && form.nom.trim() && EMAIL_REGEX.test(form.email)
    && form.password.length >= 6 && form.password === form.confirmPassword

  async function handleSubmit(e) {
    e.preventDefault()
    setTouched({ email: true, password: true, confirmPassword: true })
    setError('')
    if (!formValid) return
    setLoading(true)
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
      setError(translateAuthError(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="card">
        <h2>Créer mon compte stagiaire</h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: -8 }}>
          Ce formulaire crée un compte stagiaire. Vous êtes formateur ? Cochez la case en bas du formulaire.
        </p>
        {error && <p style={{ color: 'var(--red)' }}>{error}</p>}
        <form onSubmit={handleSubmit} noValidate>
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
            <input required type="email" value={form.email}
              onChange={e => set('email')(e.target.value)} onBlur={markTouched('email')} />
            {emailError && <small style={{ color: 'var(--red)' }}>{emailError}</small>}
          </div>
          <PasswordInput value={form.password} onChange={v => { set('password')(v); }} id="password" label="Mot de passe" />
          {passwordError && <small style={{ color: 'var(--red)', display: 'block', marginTop: -12, marginBottom: 12 }}>{passwordError}</small>}
          <div onBlur={markTouched('confirmPassword')}>
            <PasswordInput value={form.confirmPassword} onChange={set('confirmPassword')} id="confirmPassword" label="Confirmer le mot de passe" />
          </div>
          {confirmError && <small style={{ color: 'var(--red)', display: 'block', marginTop: -12, marginBottom: 12 }}>{confirmError}</small>}

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

          <div className="form-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <input type="checkbox" id="formateur" checked={afficherCodeFormateur}
              onChange={e => { setAfficherCodeFormateur(e.target.checked); if (!e.target.checked) set('inviteCode')('') }}
              style={{ width: 18, height: 18 }} />
            <label htmlFor="formateur" style={{ fontWeight: 400 }}>Je suis formateur</label>
          </div>
          {afficherCodeFormateur && (
            <div className="form-field">
              <label>Code formateur</label>
              <input value={form.inviteCode} onChange={e => set('inviteCode')(e.target.value)} placeholder="Donné par votre organisme" />
            </div>
          )}

          <button className="btn" type="submit" disabled={loading} style={{ width: '100%' }}>
            {voulTest ? 'Continuer vers le test' : loading ? 'Création…' : 'Créer mon compte'}
          </button>
        </form>
        <p style={{ marginTop: 14 }}>Déjà inscrit ? <Link to="/connexion">Se connecter</Link></p>
      </div>
    </div>
  )
}
