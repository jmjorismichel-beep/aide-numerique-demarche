// Le test de positionnement demande au stagiaire d'évaluer lui-même sa
// capacité à faire, seul, une série d'actions numériques concrètes du
// quotidien — plutôt que de tester des connaissances abstraites (comme
// "quel bouton de la souris fait quoi"). Cette approche reflète beaucoup
// mieux la réalité pratique de la personne : on demande "sais-tu envoyer
// un email seul ?" plutôt que "qu'est-ce qu'un email ?".
//
// Le VOCABULAIRE des questions s'adapte au niveau linguistique déclaré
// (A1-A2 = phrases très courtes et concrètes, B1-B2 = phrases plus
// complètes, C1-C2 = formulations normales). Les actions testées restent
// les mêmes ; seule la formulation change.

const LEVEL_GROUP = {
  A1: 'simple', A2: 'simple',
  B1: 'moyen', B2: 'moyen',
  C1: 'avance', C2: 'avance'
}

// 4 niveaux de réponse, du moins au plus autonome. Même échelle pour
// toutes les questions, donc affichée une seule fois dans l'interface.
export const RESPONSE_SCALE = {
  simple: [
    { value: 0, label: "Jamais fait / je ne sais pas" },
    { value: 1, label: "Avec de l'aide de quelqu'un" },
    { value: 2, label: "Seul(e), mais c'est difficile" },
    { value: 3, label: "Seul(e), facilement" }
  ],
  moyen: [
    { value: 0, label: "Je n'ai jamais fait ça" },
    { value: 1, label: "Je peux le faire avec de l'aide" },
    { value: 2, label: "Je peux le faire seul(e), avec difficulté" },
    { value: 3, label: "Je peux le faire seul(e), sans problème" }
  ],
  avance: [
    { value: 0, label: "Jamais fait" },
    { value: 1, label: "Avec accompagnement" },
    { value: 2, label: "En autonomie, avec quelques difficultés" },
    { value: 3, label: "En autonomie complète" }
  ]
}

export function getTestQuestions(niveauLinguistique) {
  const group = LEVEL_GROUP[niveauLinguistique] || 'moyen'
  return QUESTIONS.map(q => ({ id: q.id, text: q[group] }))
}

export function getResponseScale(niveauLinguistique) {
  const group = LEVEL_GROUP[niveauLinguistique] || 'moyen'
  return RESPONSE_SCALE[group]
}

const QUESTIONS = [
  {
    id: 'allumer',
    simple: "Allumer un ordinateur ou une tablette, et l'utiliser (ouvrir une application).",
    moyen: "Allumer un ordinateur ou une tablette et l'utiliser normalement.",
    avance: "Allumer et utiliser un ordinateur ou une tablette de façon autonome."
  },
  {
    id: 'souris-ecran',
    simple: "Utiliser une souris ou toucher un écran pour cliquer, taper, faire défiler.",
    moyen: "Utiliser une souris ou un écran tactile (cliquer, taper, faire défiler une page).",
    avance: "Manipuler une souris ou une interface tactile avec aisance (clic, défilement, saisie)."
  },
  {
    id: 'email',
    simple: "Envoyer un email avec un document ou une photo en pièce jointe.",
    moyen: "Envoyer un email en y joignant un document ou une photo.",
    avance: "Rédiger et envoyer un email avec une pièce jointe."
  },
  {
    id: 'recherche',
    simple: "Chercher une information sur internet (une adresse, un horaire...).",
    moyen: "Faire une recherche sur internet pour trouver une information précise.",
    avance: "Effectuer une recherche ciblée sur internet et identifier une information fiable."
  },
  {
    id: 'formulaire',
    simple: "Remplir un formulaire en ligne (nom, adresse, date de naissance...).",
    moyen: "Remplir un formulaire administratif en ligne avec tes informations personnelles.",
    avance: "Compléter un formulaire administratif en ligne de façon autonome."
  },
  {
    id: 'messagerie',
    simple: "Utiliser une application comme WhatsApp pour écrire ou appeler quelqu'un.",
    moyen: "Utiliser une application de messagerie (WhatsApp, SMS) pour communiquer.",
    avance: "Utiliser une application de messagerie instantanée pour échanger messages et appels."
  },
  {
    id: 'scanner',
    simple: "Prendre une photo ou scanner un document avec un téléphone.",
    moyen: "Photographier ou scanner un document avec un téléphone pour l'envoyer.",
    avance: "Numériser un document avec un smartphone en vue de le transmettre."
  },
  {
    id: 'demarche',
    simple: "Faire seul(e) une démarche administrative en ligne (CAF, impôts...).",
    moyen: "Réaliser seul(e) une démarche administrative sur un site officiel.",
    avance: "Mener à bien une démarche administrative en ligne en autonomie complète."
  }
]

// Score total possible : 8 questions x 3 points = 24
export function scoreToNiveau(score) {
  if (score <= 6) return 'debutant'
  if (score <= 14) return 'moyen'
  if (score <= 20) return 'aaise'
  return 'avance'
}

export const NIVEAUX_INFO = {
  debutant: 'Totalement débutant',
  moyen: 'Moyen',
  aaise: 'À l\'aise',
  avance: 'Avancé'
}
