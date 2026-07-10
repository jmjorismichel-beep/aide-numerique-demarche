import { create } from 'zustand'

const KEY = 'parcours_numerique_text_size'
const SIZES = ['small', 'medium', 'large']
const LABELS = { small: 'Petit', medium: 'Moyen', large: 'Grand' }
const SCALE = { small: '0.9', medium: '1', large: '1.25' }

function readInitial() {
  try {
    const saved = localStorage.getItem(KEY)
    return SIZES.includes(saved) ? saved : 'medium'
  } catch {
    return 'medium'
  }
}

export const useSettingsStore = create((set, get) => ({
  textSize: readInitial(),
  setTextSize(size) {
    if (!SIZES.includes(size)) return
    try { localStorage.setItem(KEY, size) } catch {}
    document.documentElement.style.setProperty('--text-scale', SCALE[size])
    set({ textSize: size })
  },
  cycleTextSize() {
    const current = get().textSize
    const next = SIZES[(SIZES.indexOf(current) + 1) % SIZES.length]
    get().setTextSize(next)
  }
}))

export const TEXT_SIZE_LABELS = LABELS
