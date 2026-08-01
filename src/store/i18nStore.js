import { create } from 'zustand'

const KEY = 'parcours_numerique_lang'

export const LANGUAGES = {
  fr: { label: 'Français', dir: 'ltr' },
  en: { label: 'English', dir: 'ltr' },
  es: { label: 'Español', dir: 'ltr' },
  pt: { label: 'Português', dir: 'ltr' },
  ar: { label: 'العربية', dir: 'rtl' },
  ru: { label: 'Русский', dir: 'ltr' },
  uk: { label: 'Українська', dir: 'ltr' },
  tr: { label: 'Türkçe', dir: 'ltr' },
  fa: { label: 'دری / فارسی', dir: 'rtl' },
  sq: { label: 'Shqip', dir: 'ltr' },
  ti: { label: 'ትግርኛ', dir: 'ltr' },
  so: { label: 'Soomaali', dir: 'ltr' },
  zh: { label: '中文', dir: 'ltr' },
  ur: { label: 'اردو', dir: 'rtl' },
  ps: { label: 'پښتو', dir: 'rtl' },
  bn: { label: 'বাংলা', dir: 'ltr' },
  hi: { label: 'हिन्दी', dir: 'ltr' },
  vi: { label: 'Tiếng Việt', dir: 'ltr' },
  ro: { label: 'Română', dir: 'ltr' },
  pl: { label: 'Polski', dir: 'ltr' },
  ku: { label: 'Kurdî', dir: 'ltr' },
  sw: { label: 'Kiswahili', dir: 'ltr' },
  wo: { label: 'Wolof', dir: 'ltr' },
  ka: { label: 'ქართული', dir: 'ltr' },
  hy: { label: 'Հայերեն', dir: 'ltr' },
  ta: { label: 'தமிழ்', dir: 'ltr' }
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
