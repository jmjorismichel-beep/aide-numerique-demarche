import { useState } from 'react'

const SEEN_KEY = 'parcours_numerique_tour_vu'

export function tourDejaVue() {
  try { return localStorage.getItem(SEEN_KEY) === '1' } catch { return true }
}

function marquerTourVu() {
  try { localStorage.setItem(SEEN_KEY, '1') } catch {}
}

const ETAPES = [
  {
    icon: '👋',
    titre: 'Bienvenue sur Parcours Numérique !',
    texte: "Ce site t'aide, étape par étape, à utiliser un ordinateur ou un téléphone, et à faire tes démarches administratives en ligne. Voici un tour rapide en 4 points."
  },
  {
    icon: '📋',
    titre: 'Tes modules',
    texte: "Sur cette page, tu retrouves tous tes modules, classés par thème. Une coche verte ✓ apparaît sur chaque module que tu as terminé."
  },
  {
    icon: '🧭',
    titre: "Pas sûr par où commencer ?",
    texte: "L'onglet « Par où commencer » en haut de l'écran te propose un ordre conseillé, selon ta situation."
  },
  {
    icon: '🔤',
    titre: 'Langue et taille du texte',
    texte: "En haut de l'écran, tu peux choisir ta langue (avec toujours un sous-titre en français pour t'aider à apprendre) et la taille du texte."
  },
  {
    icon: '💬',
    titre: "Besoin d'aide ?",
    texte: "L'onglet Messagerie te permet d'écrire directement à un formateur à tout moment. Bonne exploration !"
  }
]

export default function VisiteGuidee({ onFinish }) {
  const [etape, setEtape] = useState(0)
  const derniere = etape === ETAPES.length - 1
  const e = ETAPES[etape]

  function fermer() {
    marquerTourVu()
    onFinish()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visite guidée"
      style={{
        position: 'fixed', inset: 0, background: 'rgba(15, 92, 102, .55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16
      }}
    >
      <div className="card" style={{ maxWidth: 420, textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem' }}>{e.icon}</div>
        <h2 style={{ marginTop: 8 }}>{e.titre}</h2>
        <p style={{ color: 'var(--muted)' }}>{e.texte}</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, margin: '16px 0' }}>
          {ETAPES.map((_, i) => (
            <span key={i} style={{
              width: 8, height: 8, borderRadius: '50%',
              background: i === etape ? 'var(--coral)' : '#e5e7eb'
            }} />
          ))}
        </div>

        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button className="btn-link-discreet" onClick={fermer}>Passer</button>
          <button className="btn" onClick={() => derniere ? fermer() : setEtape(etape + 1)}>
            {derniere ? "C'est parti !" : 'Suivant →'}
          </button>
        </div>
      </div>
    </div>
  )
}
