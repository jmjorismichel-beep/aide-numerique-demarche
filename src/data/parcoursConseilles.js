// Ordres conseillés de modules selon la situation de la personne.
// Les id doivent correspondre à ceux de data/modules.js.

export const PARCOURS = [
  {
    id: 'nouvel-arrivant',
    title: "Je viens d'arriver au Havre",
    description: "Un ordre conseillé pour les premières démarches essentielles, avant de s'occuper du reste.",
    steps: [
      { moduleId: 'dem-titre-sejour', note: "Souvent la toute première démarche si tu n'es pas français : ta situation légale en dépend." },
      { moduleId: 'dem-carte-identite', note: "Si tu es français et que tu n'as pas encore refait tes papiers après un déménagement." },
      { moduleId: 'dem-caf', note: "Pour savoir si tu as droit à des aides financières et au logement." },
      { moduleId: 'dem-cpam', note: "Pour être remboursé de tes frais médicaux dès que possible." },
      { moduleId: 'dem-logement-social', note: "Les délais sont longs : mieux vaut faire la demande tôt, même si tu es hébergé pour l'instant." },
      { moduleId: 'dem-ecole', note: "Si tu as des enfants scolarisés, pour la cantine et la garde." },
      { moduleId: 'dem-france-travail', note: "Pour commencer à chercher un emploi ou une formation." },
      { moduleId: 'dem-sites-officiels', note: "Pour comprendre comment repérer les bons sites et ne pas te faire piéger." }
    ]
  },
  {
    id: 'deja-installe',
    title: "Je vis déjà au Havre mais je découvre le numérique",
    description: "Un ordre conseillé pour prendre en main ton appareil avant de te lancer dans les démarches.",
    steps: [
      { moduleId: 'app-windows', note: "Ou le module correspondant à ton appareil (Apple, Android, iPhone...), pour être à l'aise avec les bases." },
      { moduleId: 'dem-sites-officiels', note: "Pour savoir reconnaître un site fiable avant d'y entrer tes informations personnelles." },
      { moduleId: 'dem-caf', note: "Une démarche très fréquente, bonne pour t'entraîner." },
      { moduleId: 'dem-cpam', note: "Pour gérer ta carte Vitale et tes remboursements en ligne." },
      { moduleId: 'dem-impots', note: "Utile chaque année, une fois que tu es à l'aise avec les bases." },
      { moduleId: 'dem-carte-identite', note: "Pour prendre rendez-vous sans attendre au guichet." }
    ]
  }
]

export function getParcours(id) {
  return PARCOURS.find(p => p.id === id) || null
}
