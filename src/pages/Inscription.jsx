import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import PasswordInput from '../components/PasswordInput'
import { translateAuthError } from '../lib/authErrors'
import { NIVEAUX_INFO } from '../data/testQuestions'

const NIVEAUX_LINGUISTIQUES = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const NIVEAU_INFO_HELP = {
  debutant: "Tu n'as presque jamais utilisé un ordinateur ou un smartphone, ou tu as besoin d'aide pour les gestes de base.",
  moyen: "Tu sais faire quelques actions simples (allumer, ouvrir une application) mais tu bloques vite dès que ça se complique.",
  aaise: "Tu utilises déjà internet, les emails ou une application régulièrement, sans trop de difficulté.",
  avance: "Tu es autonome avec un ordinateur ou un smartphone au quotidien."
}

const STEPS = ['Identité', 'Mot de passe', 'Niveaux']

export default function Inscription() {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()
  const [step, setStep] = useState(0)
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

  const step1Valid = form.prenom.trim() && form.nom.trim() && EMAIL_REGEX.test(form.email)
  const step2Valid = form.password.length >= 6 && form.password === form.confirmPassword
  const formValid = step1Valid && step2Valid

  function suivant() {
    if (step === 0) {
      setTouched(t => ({ ...t, email: true }))
      if (!step1Valid) return
    }
    if (step === 1) {
      setTouched(t => ({ ...t, password: true, confirmPassword: true }))
      if (!step2Valid) return
    }
    setStep(s => Math.min(s + 1, STEPS.length - 1))
  }
  function precedent() {
    setStep(s => Math.max(s - 1, 0))
  }

  async function handleSubmit(e) {
    e.preventDefault()
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
          Ce formulaire crée un compte stagiaire.
        </p>

        <div className="step-progress">
          {STEPS.map((label, i) => (
            <div key={label} className={`step-dot-wrap ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
              <div className="step-dot">{i < step ? '✓' : i + 1}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '.85rem', marginTop: -6 }}>
          Étape {step + 1} sur {STEPS.length}
        </p>

        {error && <p style={{ color: 'var(--red)' }}>{error}</p>}

        <form onSubmit={handleSubmit} noValidate>
          {step === 0 && (
            <>
              <div className="form-field">
                <label>Prénom</label>
                <input required placeholder="Ex : Fatima" value={form.prenom} onChange={e => set('prenom')(e.target.value)} />
              </div>
              <div className="form-field">
                <label>Nom</label>
                <input required placeholder="Ex : Diallo" value={form.nom} onChange={e => set('nom')(e.target.value)} />
              </div>
              <div className="form-field">
                <label>Adresse mail</label>
                <input required type="email" placeholder="Ex : fatima.diallo@email.fr" value={form.email}
                  onChange={e => set('email')(e.target.value)} onBlur={markTouched('email')} />
                {emailError && <small style={{ color: 'var(--red)' }}>{emailError}</small>}
              </div>
              <button type="button" className="btn" style={{ width: '100%' }} onClick={suivant}>Suivant →</button>
            </>
          )}

          {step === 1 && (
            <>
              <PasswordInput value={form.password} onChange={set('password')} id="password" label="Mot de passe" showHint />
              {passwordError && <small style={{ color: 'var(--red)', display: 'block', marginTop: -12, marginBottom: 12 }}>{passwordError}</small>}
              <div onBlur={markTouched('confirmPassword')}>
                <PasswordInput value={form.confirmPassword} onChange={set('confirmPassword')} id="confirmPassword" label="Confirmer le mot de passe" />
              </div>
              {confirmError && <small style={{ color: 'var(--red)', display: 'block', marginTop: -12, marginBottom: 12 }}>{confirmError}</small>}
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="button" className="btn secondary" onClick={precedent}>← Retour</button>
                <button type="button" className="btn" style={{ flex: 1 }} onClick={suivant}>Suivant →</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
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
                <small className="field-hint">{NIVEAU_INFO_HELP[form.niveauInformatique]}</small>
              </div>

              <div className="form-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" id="test" checked={voulTest} onChange={e => setVoulTest(e.target.checked)} style={{ width: 18, height: 18 }} />
                <label htmlFor="test" style={{ fontWeight: 400 }}>
                  Je préfère faire un test de positionnement pour déterminer mon niveau informatique
                </label>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button type="button" className="btn secondary" onClick={precedent}>← Retour</button>
                <button className="btn" type="submit" disabled={loading} style={{ flex: 1 }}>
                  {voulTest ? 'Continuer vers le test' : loading ? 'Création…' : 'Créer mon compte'}
                </button>
              </div>
            </>
          )}
        </form>

        <p style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #e5e7eb' }}>Déjà inscrit ? <Link to="/connexion">Se connecter</Link></p>

        <p style={{ marginTop: 10 }}>
          <button type="button" className="btn-link-discreet" onClick={() => setAfficherCodeFormateur(v => !v)}>
            Vous êtes formateur ? Cliquez ici
          </button>
        </p>
        {afficherCodeFormateur && (
          <div className="form-field">
            <label>Code formateur</label>
            <input value={form.inviteCode} onChange={e => set('inviteCode')(e.target.value)} placeholder="Donné par votre organisme" />
            <small className="field-hint">Renseignez ce code puis complétez normalement le formulaire ci-dessus : votre compte sera créé avec le rôle formateur.</small>
          </div>
        )}
      </div>
    </div>
  )
}
