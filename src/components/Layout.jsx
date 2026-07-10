import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { onSyncStatusChange } from '../lib/sync'

export default function Layout({ children }) {
  const { user, signOut } = useAuthStore()
  const navigate = useNavigate()
  const [online, setOnline] = useState(navigator.onLine)
  const [syncStatus, setSyncStatus] = useState('idle')

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
        <h1>🏝️ Parcours Numérique RÉCIFE</h1>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
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
              <NavLink to="/messagerie" className={({isActive}) => isActive ? 'active' : ''}>Messagerie</NavLink>
            </>}
            {isFormateur && <>
              <NavLink to="/formateur" end className={({isActive}) => isActive ? 'active' : ''}>Activité</NavLink>
              <NavLink to="/formateur/groupes" className={({isActive}) => isActive ? 'active' : ''}>Groupes</NavLink>
              <NavLink to="/formateur/stagiaires" className={({isActive}) => isActive ? 'active' : ''}>Stagiaires</NavLink>
              <NavLink to="/formateur/modules" className={({isActive}) => isActive ? 'active' : ''}>Contenu des modules</NavLink>
              <NavLink to="/messagerie" className={({isActive}) => isActive ? 'active' : ''}>Messagerie</NavLink>
            </>}
          </nav>
        </div>
      )}
      <main className="container">{children}</main>
    </div>
  )
}
