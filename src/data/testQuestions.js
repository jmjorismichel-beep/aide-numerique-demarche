// Le test de positionnement adapte le VOCABULAIRE des questions au niveau
// linguistique déclaré par le stagiaire (A1-A2 = phrases très courtes et
// concrètes, B1-B2 = phrases plus complètes, C1-C2 = formulations normales).
// Le contenu informatique testé reste le même ; c'est la formulation qui change.

const LEVEL_GROUP = {
  A1: 'simple', A2: 'simple',
  B1: 'moyen', B2: 'moyen',
  C1: 'avance', C2: 'avance'
}

export function getTestQuestions(niveauLinguistique) {
  const group = LEVEL_GROUP[niveauLinguistique] || 'moyen'
  return QUESTIONS.map(q => ({ id: q.id, points: q.points, ...q[group] }))
}

const QUESTIONS = [
  {
    id: 'q1', points: 1,
    simple: { text: "Tu vois une souris d'ordinateur. Tu cliques avec quel bouton pour ouvrir un menu ?",
      options: ["Bouton gauche", "Bouton droit", "La molette"] },
    moyen: { text: "Pour afficher un menu contextuel sur un fichier, quel bouton de la souris utilises-tu ?",
      options: ["Bouton gauche", "Bouton droit", "La molette"] },
    avance: { text: "Quel bouton de la souris permet d'accéder au menu contextuel d'un élément ?",
      options: ["Bouton gauche", "Bouton droit", "La molette"] },
  },
  {
    id: 'q2', points: 1,
    simple: { text: "Tu veux écrire un mot de passe secret. Le mot de passe doit être :",
      options: ["Facile à deviner", "Connu de tout le monde", "Difficile à deviner et gardé secret"] },
    moyen: { text: "Un bon mot de passe doit être :", options: ["Simple et court", "Difficile à deviner", "Le même partout"] },
    avance: { text: "Quelle affirmation décrit le mieux une bonne pratique de mot de passe ?",
      options: ["Réutiliser le même mot de passe partout", "Un mot de passe unique et complexe par service", "Le partager avec ses proches"] },
  },
  {
    id: 'q3', points: 1,
    simple: { text: "Tu veux envoyer un message avec un fichier. Tu utilises :",
      options: ["Un email (courriel)", "Une calculatrice", "Une imprimante"] },
    moyen: { text: "Pour envoyer un document à quelqu'un par internet, tu utilises :",
      options: ["Un email", "Un tableur", "Une clé USB uniquement"] },
    avance: { text: "Quel outil est le plus adapté pour transmettre un document numérique à distance ?",
      options: ["La messagerie électronique", "Une feuille de calcul", "Un lecteur multimédia"] },
  },
  {
    id: 'q4', points: 1,
    simple: { text: "Sur internet, une adresse de site commence souvent par :",
      options: ["https://", "@@@", "1234"] },
    moyen: { text: "Une adresse internet sécurisée commence généralement par :",
      options: ["https://", "www!!", "abc:"] },
    avance: { text: "Quel préfixe indique qu'une connexion à un site est chiffrée ?",
      options: ["https://", "ftp://", "mailto:"] },
  },
  {
    id: 'q5', points: 1,
    simple: { text: "Tu veux garder une copie d'un document important. Tu dois :",
      options: ["Le sauvegarder (enregistrer)", "Le fermer sans enregistrer", "L'ignorer"] },
    moyen: { text: "Pour ne pas perdre ton travail sur un document, il faut :",
      options: ["Le sauvegarder régulièrement", "Éteindre l'ordinateur directement", "Rien faire"] },
    avance: { text: "Quelle est la meilleure pratique pour éviter de perdre des données ?",
      options: ["Sauvegardes régulières", "Ne jamais fermer l'application", "Travailler uniquement hors-ligne"] },
  }
]

// Score sur 5 -> proposition de niveau informatique
export function scoreToNiveau(score) {
  if (score <= 1) return 'debutant'
  if (score <= 3) return 'moyen'
  if (score === 4) return 'aaise'
  return 'avance'
}

export const NIVEAUX_INFO = {
  debutant: 'Totalement débutant',
  moyen: 'Moyen',
  aaise: 'À l\'aise',
  avance: 'Avancé'
}
