import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import { initSyncEngine } from './lib/sync'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'
import TestPositionnement from './pages/TestPositionnement'
import Dashboard from './pages/stagiaire/Dashboard'
import ModulePage from './pages/stagiaire/ModulePage'
import ParcoursConseille from './pages/stagiaire/ParcoursConseille'
import Glossaire from './pages/Glossaire'
import Messagerie from './pages/Messagerie'
import FormateurDashboard from './pages/formateur/FormateurDashboard'
import Groupes from './pages/formateur/Groupes'
import Stagiaires from './pages/formateur/Stagiaires'
import EditeurModule from './pages/formateur/EditeurModule'
import Statistiques from './pages/formateur/Statistiques'

export default function App() {
  const { init, user, loading } = useAuthStore()

  useEffect(() => {
    init()
    initSyncEngine()
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={loading ? '/inscription' : (user ? (user.role === 'formateur' ? '/formateur' : '/dashboard') : '/inscription')} replace />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/test-positionnement" element={<TestPositionnement />} />

        <Route path="/dashboard" element={<ProtectedRoute role="stagiaire"><Dashboard /></ProtectedRoute>} />
        <Route path="/module/:id" element={<ProtectedRoute role="stagiaire"><ModulePage /></ProtectedRoute>} />
        <Route path="/parcours-conseille" element={<ProtectedRoute role="stagiaire"><ParcoursConseille /></ProtectedRoute>} />
        <Route path="/glossaire" element={<ProtectedRoute><Glossaire /></ProtectedRoute>} />
        <Route path="/messagerie" element={<ProtectedRoute><Messagerie /></ProtectedRoute>} />

        <Route path="/formateur" element={<ProtectedRoute role="formateur"><FormateurDashboard /></ProtectedRoute>} />
        <Route path="/formateur/groupes" element={<ProtectedRoute role="formateur"><Groupes /></ProtectedRoute>} />
        <Route path="/formateur/stagiaires" element={<ProtectedRoute role="formateur"><Stagiaires /></ProtectedRoute>} />
        <Route path="/formateur/modules" element={<ProtectedRoute role="formateur"><EditeurModule /></ProtectedRoute>} />
        <Route path="/formateur/statistiques" element={<ProtectedRoute role="formateur"><Statistiques /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
