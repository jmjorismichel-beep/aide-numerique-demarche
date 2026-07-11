import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSettingsStore, TEXT_SIZE_LABELS } from '../store/settingsStore'
import { useI18nStore, LANGUAGES } from '../store/i18nStore'
import { onSyncStatusChange } from '../lib/sync'
import { useUnreadCount } from '../lib/useUnreadCount'

export default function Layout({ children }) {
  const { user, signOut } = useAuthStore()
  const navigate = useNavigate()
  const [online, setOnline] = useState(navigator.onLine)
  const [syncStatus, setSyncStatus] = useState('idle')
  const { textSize, cycleTextSize } = useSettingsStore()
  const { lang, setLang } = useI18nStore()
  const unreadCount = useUnreadCount(user?.id)

  useEffect(() => {
    document.documentElement.style.setProperty('--text-scale',
      textSize === 'small' ? '0.9' : textSize === 'large' ? '1.25' : '1')
  }, [textSize])

  useEffect(() => {
    document.documentElement.setAttribute('dir', LANGUAGES[lang].dir)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    const unsub = onSyncStatusChange(setSyncStatus)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off); unsub() }
  }, [])

  const isFormateur = user?.role === 'formateur'

  return (
    <div className="app-shell">
      <div className="topbar">
        <h1>🧭 Parcours Numérique</h1>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <select className="text-size-toggle" value={lang} onChange={e => setLang(e.target.value)} title="Langue / Language" aria-label="Choisir la langue">
            {Object.entries(LANGUAGES).map(([code, l]) => <option key={code} value={code}>{l.label}</option>)}
          </select>
          <button className="text-size-toggle" onClick={cycleTextSize} title="Changer la taille du texte" aria-label="Changer la taille du texte">
            🔤 {TEXT_SIZE_LABELS[textSize]}
          </button>
          <span className={`offline-pill ${online ? 'online' : 'offline'}`}>
            {online ? (syncStatus === 'syncing' ? 'Synchronisation…' : 'En ligne') : 'Hors-ligne (sauvegarde locale)'}
          </span>
          {user && (
            <button className="btn secondary" onClick={async () => { await signOut(); navigate('/connexion') }}>
              Déconnexion
            </button>
          )}
        </div>
      </div>
      {user && (
        <div className="container" style={{ paddingBottom: 0 }}>
          <nav className="nav-tabs">
            {!isFormateur && <>
              <NavLink to="/dashboard" className={({isActive}) => isActive ? 'active' : ''}>Mes modules</NavLink>
              <NavLink to="/parcours-conseille" className={({isActive}) => isActive ? 'active' : ''}>Par où commencer</NavLink>
              <NavLink to="/glossaire" className={({isActive}) => isActive ? 'active' : ''}>Glossaire</NavLink>
              <NavLink to="/messagerie" className={({isActive}) => isActive ? 'active' : ''}>
                Messagerie {unreadCount > 0 && <span className="unread-dot">{unreadCount}</span>}
              </NavLink>
            </>}
            {isFormateur && <>
              <NavLink to="/formateur" end className={({isActive}) => isActive ? 'active' : ''}>Activité</NavLink>
              <NavLink to="/formateur/groupes" className={({isActive}) => isActive ? 'active' : ''}>Groupes</NavLink>
              <NavLink to="/formateur/stagiaires" className={({isActive}) => isActive ? 'active' : ''}>Stagiaires</NavLink>
              <NavLink to="/formateur/modules" className={({isActive}) => isActive ? 'active' : ''}>Contenu des modules</NavLink>
              <NavLink to="/formateur/statistiques" className={({isActive}) => isActive ? 'active' : ''}>Statistiques</NavLink>
              <NavLink to="/glossaire" className={({isActive}) => isActive ? 'active' : ''}>Glossaire</NavLink>
              <NavLink to="/messagerie" className={({isActive}) => isActive ? 'active' : ''}>
                Messagerie {unreadCount > 0 && <span className="unread-dot">{unreadCount}</span>}
              </NavLink>
            </>}
          </nav>
        </div>
      )}
      <main className="container">{children}</main>
    </div>
  )
}
