import { useEffect, useState, useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSettingsStore, TEXT_SIZE_LABELS } from '../store/settingsStore'
import { useI18nStore, LANGUAGES } from '../store/i18nStore'
import { onSyncStatusChange } from '../lib/sync'
import { useUnreadCount } from '../lib/useUnreadCount'
import { db } from '../lib/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { notificationsSupported, requestNotificationPermission, shouldAskForPermission, notifyNewMessage } from '../lib/notifications'

export default function Layout({ children }) {
  const { user, signOut } = useAuthStore()
  const navigate = useNavigate()
  const [online, setOnline] = useState(navigator.onLine)
  const [syncStatus, setSyncStatus] = useState('idle')
  const { textSize, cycleTextSize } = useSettingsStore()
  const { lang, setLang } = useI18nStore()
  const unreadCount = useUnreadCount(user?.id)
  const [askNotif, setAskNotif] = useState(false)
  const prevUnreadRef = useRef(null)

  const latestUnread = useLiveQuery(
    () => user?.id
      ? db.messages.filter(m => m.recipient_id === user.id && m.read === false).sortBy('created_at')
      : Promise.resolve([]),
    [user?.id]
  ) || []

  useEffect(() => {
    if (user?.id) setAskNotif(shouldAskForPermission())
  }, [user?.id])

  // Déclenche une notification navigateur quand le nombre de messages non
  // lus augmente (jamais au tout premier chargement, uniquement sur une
  // vraie nouvelle arrivée pendant que l'app est ouverte).
  useEffect(() => {
    if (prevUnreadRef.current !== null && unreadCount > prevUnreadRef.current) {
      const dernier = latestUnread[latestUnread.length - 1]
      if (dernier) {
        const expediteur = db.users.get(dernier.sender_id)
        expediteur.then(u => notifyNewMessage(u ? `${u.prenom} ${u.nom}` : 'un contact', dernier.text))
      }
    }
    prevUnreadRef.current = unreadCount
  }, [unreadCount])

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
      <a href="#contenu-principal" className="skip-link">Aller directement au contenu</a>
      <header className="topbar">
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
      </header>
      {askNotif && notificationsSupported() && (
        <div style={{ background: '#FFF6F2', borderBottom: '1.5px solid var(--coral)', padding: '10px 20px', display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '.9rem' }}>🔔 Être averti quand un nouveau message arrive, tant que ce site reste ouvert dans un onglet ?</span>
          <button className="btn" style={{ padding: '6px 14px' }} onClick={async () => { await requestNotificationPermission(); setAskNotif(false) }}>Activer</button>
          <button className="btn secondary" style={{ padding: '6px 14px' }} onClick={() => { localStorage.setItem('parcours_numerique_notif_permission_asked', 'asked'); setAskNotif(false) }}>Non merci</button>
        </div>
      )}
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
              <NavLink to="/mon-compte" className={({isActive}) => isActive ? 'active' : ''}>Mon compte</NavLink>
              <NavLink to="/signaler-un-probleme" className={({isActive}) => isActive ? 'active' : ''}>Signaler un problème</NavLink>
            </>}
            {isFormateur && <>
              <NavLink to="/formateur" end className={({isActive}) => isActive ? 'active' : ''}>Activité</NavLink>
              <NavLink to="/formateur/groupes" className={({isActive}) => isActive ? 'active' : ''}>Groupes</NavLink>
              <NavLink to="/formateur/stagiaires" className={({isActive}) => isActive ? 'active' : ''}>Stagiaires</NavLink>
              <NavLink to="/formateur/formateurs" className={({isActive}) => isActive ? 'active' : ''}>Formateurs</NavLink>
              <NavLink to="/formateur/modules" className={({isActive}) => isActive ? 'active' : ''}>Contenu des modules</NavLink>
              <NavLink to="/formateur/statistiques" className={({isActive}) => isActive ? 'active' : ''}>Statistiques</NavLink>
              <NavLink to="/formateur/signalements" className={({isActive}) => isActive ? 'active' : ''}>Signalements</NavLink>
              <NavLink to="/formateur/maintenance" className={({isActive}) => isActive ? 'active' : ''}>Maintenance</NavLink>
              <NavLink to="/glossaire" className={({isActive}) => isActive ? 'active' : ''}>Glossaire</NavLink>
              <NavLink to="/messagerie" className={({isActive}) => isActive ? 'active' : ''}>
                Messagerie {unreadCount > 0 && <span className="unread-dot">{unreadCount}</span>}
              </NavLink>
              <NavLink to="/mon-compte" className={({isActive}) => isActive ? 'active' : ''}>Mon compte</NavLink>
            </>}
          </nav>
        </div>
      )}
      <main id="contenu-principal" className="container">{children}</main>
    </div>
  )
}
