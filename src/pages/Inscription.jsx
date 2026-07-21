import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useI18nStore } from '../store/i18nStore'
import { t } from '../data/translations/ui'
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

export default function Inscription() {
  const navigate = useNavigate()
  const { signUp } = useAuthStore()
  const { lang } = useI18nStore()
  const STEPS = [t(lang, 'step1'), t(lang, 'step2'), t(lang, 'step3')]
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
    ? t(lang, 'emailInvalid') : null
  const passwordError = touched.password && form.password && form.password.length < 6
    ? t(lang, 'passwordTooShort') : null
  const confirmError = touched.confirmPassword && form.confirmPassword && form.confirmPassword !== form.password
    ? t(lang, 'passwordMismatch') : null

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
        <h2>{t(lang, 'signupTitle')}</h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', marginTop: -8 }}>
          {t(lang, 'signupIntro')}
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
          {t(lang, 'stepOf')} {step + 1} / {STEPS.length}
        </p>

        {error && <p style={{ color: 'var(--red)' }}>{error}</p>}

        <form onSubmit={handleSubmit} noValidate>
          {step === 0 && (
            <>
              <div className="form-field">
                <label>{t(lang, 'firstName')}</label>
                <input required placeholder={t(lang, 'firstNamePh')} value={form.prenom} onChange={e => set('prenom')(e.target.value)} />
              </div>
              <div className="form-field">
                <label>{t(lang, 'lastName')}</label>
                <input required placeholder={t(lang, 'lastNamePh')} value={form.nom} onChange={e => set('nom')(e.target.value)} />
              </div>
              <div className="form-field">
                <label>{t(lang, 'email')}</label>
                <input required type="email" placeholder={t(lang, 'emailPh')} value={form.email}
                  onChange={e => set('email')(e.target.value)} onBlur={markTouched('email')} />
                {emailError && <small style={{ color: 'var(--red)' }}>{emailError}</small>}
              </div>
              <button type="button" className="btn" style={{ width: '100%' }} onClick={suivant}>{t(lang, 'next')} →</button>
            </>
          )}

          {step === 1 && (
            <>
              <PasswordInput value={form.password} onChange={set('password')} id="password" label={t(lang, 'password')} showHint />
              {passwordError && <small style={{ color: 'var(--red)', display: 'block', marginTop: -12, marginBottom: 12 }}>{passwordError}</small>}
              <div onBlur={markTouched('confirmPassword')}>
                <PasswordInput value={form.confirmPassword} onChange={set('confirmPassword')} id="confirmPassword" label={t(lang, 'confirmPassword')} />
              </div>
              {confirmError && <small style={{ color: 'var(--red)', display: 'block', marginTop: -12, marginBottom: 12 }}>{confirmError}</small>}
              <div style={{ display: 'flex', gap: 10 }}>
                <button type="button" className="btn secondary" onClick={precedent}>← {t(lang, 'back')}</button>
                <button type="button" className="btn" style={{ flex: 1 }} onClick={suivant}>{t(lang, 'next')} →</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="form-field">
                <label>{t(lang, 'linguisticLevel')}</label>
                <select value={form.niveauLinguistique} onChange={e => set('niveauLinguistique')(e.target.value)}>
                  {NIVEAUX_LINGUISTIQUES.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
                <small className="field-hint">{t(lang, `cecr${form.niveauLinguistique}`)}</small>
              </div>

              <div className="form-field">
                <label>{t(lang, 'computerLevel')}</label>
                <select value={form.niveauInformatique} onChange={e => set('niveauInformatique')(e.target.value)}>
                  {Object.entries(NIVEAUX_INFO).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
                <small className="field-hint">{NIVEAU_INFO_HELP[form.niveauInformatique]}</small>
              </div>

              <div className="form-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" id="test" checked={voulTest} onChange={e => setVoulTest(e.target.checked)} style={{ width: 18, height: 18 }} />
                <label htmlFor="test" style={{ fontWeight: 400 }}>
                  {t(lang, 'preferTest')}
                </label>
              </div>

              <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                <button type="button" className="btn secondary" onClick={precedent}>← {t(lang, 'back')}</button>
                <button className="btn" type="submit" disabled={loading} style={{ flex: 1 }}>
                  {voulTest ? t(lang, 'continueToTest') : loading ? t(lang, 'creating') : t(lang, 'createAccount')}
                </button>
              </div>
            </>
          )}
        </form>

        <p style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #e5e7eb' }}>{t(lang, 'alreadyRegistered')} <Link to="/connexion">{t(lang, 'login')}</Link></p>

        <p style={{ marginTop: 10 }}>
          <button type="button" className="btn-link-discreet" onClick={() => setAfficherCodeFormateur(v => !v)}>
            {t(lang, 'areYouTrainer')}
          </button>
        </p>
        {afficherCodeFormateur && (
          <div className="form-field">
            <label>{t(lang, 'trainerCode')}</label>
            <input value={form.inviteCode} onChange={e => set('inviteCode')(e.target.value)} placeholder="Donné par votre organisme" />
            <small className="field-hint">Renseignez ce code puis complétez normalement le formulaire ci-dessus. Pour des raisons de sécurité, ton compte n'obtient pas le rôle formateur automatiquement : un formateur déjà présent devra approuver ta demande depuis son espace, généralement rapidement.</small>
          </div>
        )}
      </div>
    </div>
  )
}
