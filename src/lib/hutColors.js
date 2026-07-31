// Chaque catégorie a sa propre couleur de "cabine de plage", comme une vraie
// rangée de cabines colorées sur le front de mer du Havre — la couleur
// devient un vrai repère de navigation (on reconnaît une catégorie d'un
// coup d'œil), pas juste une décoration arbitraire par module.
const CATEGORY_COLORS = {
  appareils: 'var(--hut-sea)',
  'numerique-base': 'var(--hut-sun)',
  demarches: 'var(--hut-coral)',
  sante: 'var(--hut-leaf)',
  'argent-travail': 'var(--hut-plum)',
  logement: 'var(--hut-sand)',
  famille: 'var(--hut-sky)',
  'papiers-citoyennete': 'var(--hut-terracotta)',
  'securite-pratique': 'var(--hut-lilac)'
}

export function hutColorFor(category) {
  return CATEGORY_COLORS[category] || 'var(--sea)'
}

export { CATEGORY_COLORS }
