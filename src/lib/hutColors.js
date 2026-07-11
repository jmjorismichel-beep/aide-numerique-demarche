const HUT_COLORS = ['var(--hut-coral)', 'var(--hut-sun)', 'var(--hut-sea)', 'var(--hut-plum)', 'var(--hut-leaf)']

// Même module = toujours la même couleur (basé sur l'id, stable dans le temps).
export function hutColorFor(id) {
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) >>> 0
  return HUT_COLORS[hash % HUT_COLORS.length]
}
