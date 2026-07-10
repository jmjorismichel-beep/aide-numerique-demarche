import { create } from 'zustand'

const KEY = 'parcours_numerique_lang'

export const LANGUAGES = {
  fr: { label: 'Français', dir: 'ltr' },
  en: { label: 'English', dir: 'ltr' },
  ar: { label: 'العربية', dir: 'rtl' }
}

function readInitial() {
  try {
    const saved = localStorage.getItem(KEY)
    return LANGUAGES[saved] ? saved : 'fr'
  } catch {
    return 'fr'
  }
}

export const useI18nStore = create((set) => ({
  lang: readInitial(),
  setLang(lang) {
    if (!LANGUAGES[lang]) return
    try { localStorage.setItem(KEY, lang) } catch {}
    document.documentElement.setAttribute('dir', LANGUAGES[lang].dir)
    document.documentElement.setAttribute('lang', lang)
    set({ lang })
  }
}))
