import { useState } from 'react'

const SEEN_KEY = 'parcours_numerique_tour_formateur_vu'

export function tourFormateurDejaVue() {
  try { return localStorage.getItem(SEEN_KEY) === '1' } catch { return true }
}

function marquerTourVu() {
  try { localStorage.setItem(SEEN_KEY, '1') } catch {}
}

const ETAPES = [
  {
    icon: '👋',
    titre: 'Bienvenue dans ton espace formateur !',
    texte: "Voici un tour rapide des fonctionnalités principales, pour te repérer avant de commencer."
  },
  {
    icon: '📊',
    titre: 'Activité et Statistiques',
    texte: "« Activité » montre la dernière action de chaque stagiaire. « Statistiques » va plus loin : taux de complétion par module (les moins avancés en premier), et les retours « Comment ça s'est passé ? » des stagiaires — utile pour repérer qui a besoin d'aide."
  },
  {
    icon: '✏️',
    titre: 'Modifier le contenu des modules',
    texte: "Tu peux éditer chaque module. « 💾 Enregistrer en brouillon » garde tes changements privés le temps de te relire ; « 🚀 Publier » les met en ligne. Chaque publication garde un historique, avec retour en arrière possible."
  },
  {
    icon: '✅',
    titre: "Approuver un nouveau formateur",
    texte: "Quand une personne s'inscrit avec le bon code formateur, sa demande apparaît dans l'onglet « Formateurs », en attente de ton approbation ou refus."
  },
  {
    icon: '💬',
    titre: 'Messagerie et groupes',
    texte: "Écris à un stagiaire individuellement, ou à un groupe entier en une fois depuis la messagerie. Bonne prise en main !"
  }
]

export default function VisiteGuideeFormateur({ onFinish }) {
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
      aria-label="Visite guidée formateur"
      style={{
        position: 'fixed', inset: 0, background: 'rgba(15, 92, 102, .55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 16
      }}
    >
      <div className="card" style={{ maxWidth: 440, textAlign: 'center' }}>
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
