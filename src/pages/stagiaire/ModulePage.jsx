import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getModule } from '../../data/getModuleContent'
import { useAuthStore } from '../../store/authStore'
import { useI18nStore } from '../../store/i18nStore'
import { translateModule } from '../../data/translations/modules'
import { logActivity } from '../../lib/activity'
import { exportModuleToPdf } from '../../lib/pdf'
import { saveRecord } from '../../lib/sync'
import { db, uid } from '../../lib/db'
import { speak, stopSpeaking, speechAvailable } from '../../lib/speech'
import StepIllustration from '../../components/StepIllustration'

const SELF_ASSESSMENT_OPTIONS = [
  { value: 'facile', label: '🙂 J\'ai réussi facilement' },
  { value: 'aide', label: '🤔 J\'ai eu besoin d\'aide' },
  { value: 'difficile', label: '😕 C\'était difficile' }
]

export default function ModulePage() {
  const { id } = useParams()
  const { user } = useAuthStore()
  const { lang } = useI18nStore()
  const [rawModule, setRawModule] = useState(null)
  const [done, setDone] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [selfAssessment, setSelfAssessment] = useState(null)

  useEffect(() => {
    getModule(id).then(setRawModule)
    logActivity(user.id, `Consulte le module`, id)
    return () => stopSpeaking()
  }, [id])

  useEffect(() => {
    db.moduleProgress.filter(p => p.user_id === user.id && p.module_id === id).first().then(p => {
      setDone(!!p?.completed)
      setSelfAssessment(p?.self_assessment || null)
    })
  }, [id])

  const module = translateModule(rawModule, lang)
  if (!module) return <p>Chargement…</p>

  async function marquerTermine() {
    await saveRecord('moduleProgress', {
      id: uid(), user_id: user.id, module_id: id, completed: true, completed_at: new Date().toISOString()
    })
    setDone(true)
    await logActivity(user.id, 'A terminé le module', id)
  }

  async function enregistrerAutoEvaluation(value) {
    setSelfAssessment(value)
    const existing = await db.moduleProgress.filter(p => p.user_id === user.id && p.module_id === id).first()
    await saveRecord('moduleProgress', {
      ...(existing || { id: uid(), user_id: user.id, module_id: id }),
      self_assessment: value
    })
  }

  function answerQuiz(qIndex, optionIndex) {
    setQuizAnswers(a => ({ ...a, [qIndex]: optionIndex }))
  }

  async function validerQuiz() {
    setQuizSubmitted(true)
    const total = module.quiz.length
    const correct = module.quiz.filter((q, i) => quizAnswers[i] === q.correctIndex).length
    await saveRecord('testResults', {
      id: uid(), user_id: user.id, module_id: id, score: correct, total,
      created_at: new Date().toISOString()
    })
    await logActivity(user.id, `A fait le quiz du module (${correct}/${total})`, id)
  }

  function lireToutLeModule() {
    const texte = [module.title, module.description, ...(module.steps || []).map(s => `${s.title}. ${s.text}`)].join('. ')
    speak(texte)
  }

  return (
    <div>
      <Link to="/dashboard">&larr; Retour aux modules</Link>
      <div className="card" style={{ marginTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h2>{module.icon} {module.title}</h2>
            <p>{module.description}</p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {speechAvailable && <button className="speak-btn" onClick={lireToutLeModule}>🔊 Écouter tout</button>}
            <button className="btn secondary" onClick={() => exportModuleToPdf(module)}>🖨️ Imprimer en PDF</button>
            {!done && <button className="btn" onClick={marquerTermine}>Marquer comme terminé</button>}
            {done && <span className="badge online">Terminé ✓</span>}
          </div>
        </div>

        {module.whatIsIt && (
          <div className="doc-checklist" style={{ background: '#fefce8', borderColor: '#fde68a' }}>
            <h4>💡 {lang === 'en' ? 'What is this, and why is it useful?' : lang === 'ar' ? 'ما هذا؟ ولماذا هو مفيد؟' : "C'est quoi, et pourquoi c'est utile ?"}</h4>
            <p style={{ margin: 0 }}>{module.whatIsIt}</p>
          </div>
        )}

        {module.documents && module.documents.length > 0 && (
          <div className="doc-checklist">
            <h4>📋 {lang === 'en' ? 'Documents to prepare before starting' : lang === 'ar' ? 'المستندات التي يجب تحضيرها قبل البدء' : 'Documents à préparer avant de commencer'}</h4>
            <ul>
              {module.documents.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        )}

        {module.stepsNotTranslated && (module.steps || []).length > 0 && (
          <p style={{ background: '#eff6ff', border: '1.5px solid #bfdbfe', borderRadius: 10, padding: 10, fontSize: '.9rem' }}>
            {lang === 'en'
              ? 'The detailed steps below are only available in French for now.'
              : 'الخطوات التفصيلية أدناه متوفرة باللغة الفرنسية فقط حالياً.'}
          </p>
        )}

        {(module.steps || []).length === 0 && (
          <p style={{ color: 'var(--muted)', marginTop: 20 }}>
            Le contenu détaillé de ce module sera bientôt ajouté par votre formateur.
          </p>
        )}

        {(module.steps || []).map((s, i) => (
          <div className="step-card" key={i}>
            <div className="step-card-body">
              {s.visual && <StepIllustration visual={s.visual} />}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                  <h4>{i + 1}. {s.title}</h4>
                  {speechAvailable && (
                    <button className="speak-btn" onClick={() => speak(`${s.title}. ${s.text}`)}>🔊</button>
                  )}
                </div>
                <p>{s.text}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Vérification de compréhension : quiz si disponible, sinon auto-évaluation simple */}
        {module.quiz && module.quiz.length > 0 && (
          <div className="quiz-box">
            <h4>✏️ Vérifie ta compréhension</h4>
            {module.quiz.map((q, qi) => (
              <div key={qi} style={{ marginBottom: 16 }}>
                <p style={{ fontWeight: 600 }}>{q.question}</p>
                {q.options.map((opt, oi) => {
                  const selected = quizAnswers[qi] === oi
                  const showResult = quizSubmitted
                  const isCorrect = oi === q.correctIndex
                  let style = {}
                  if (showResult && selected && isCorrect) style = { borderColor: 'var(--green)', background: '#f0fdf4' }
                  if (showResult && selected && !isCorrect) style = { borderColor: 'var(--red)', background: '#fef2f2' }
                  return (
                    <button
                      key={oi}
                      className="btn secondary quiz-option"
                      style={{ border: selected ? '2px solid var(--blue)' : undefined, ...style }}
                      onClick={() => !quizSubmitted && answerQuiz(qi, oi)}
                      disabled={quizSubmitted}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            ))}
            {!quizSubmitted
              ? <button className="btn" onClick={validerQuiz} disabled={Object.keys(quizAnswers).length < module.quiz.length}>Valider mes réponses</button>
              : <p>Résultat : {module.quiz.filter((q, i) => quizAnswers[i] === q.correctIndex).length} / {module.quiz.length} bonnes réponses.</p>
            }
          </div>
        )}

        {(!module.quiz || module.quiz.length === 0) && (module.steps || []).length > 0 && (
          <div className="quiz-box">
            <h4>Comment ça s'est passé ?</h4>
            <p style={{ color: 'var(--muted)', marginBottom: 10 }}>Dis-nous comment tu as vécu ce module, ça aide ton formateur à savoir si tu as besoin d'aide.</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {SELF_ASSESSMENT_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  className="btn secondary"
                  style={{ border: selfAssessment === opt.value ? '2px solid var(--blue)' : undefined }}
                  onClick={() => enregistrerAutoEvaluation(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
