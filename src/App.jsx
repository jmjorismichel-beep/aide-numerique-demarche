import { useEffect, Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/authStore'
import { initSyncEngine } from './lib/sync'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

// Chargées immédiatement : ce sont les toutes premières pages vues par tout le monde.
import Inscription from './pages/Inscription'
import Connexion from './pages/Connexion'

// Chargées à la demande (code-splitting) : réduit le poids du premier chargement.
// Un stagiaire ne télécharge jamais le code de l'espace formateur, et vice versa.
const TestPositionnement = lazy(() => import('./pages/TestPositionnement'))
const Dashboard = lazy(() => import('./pages/stagiaire/Dashboard'))
const ModulePage = lazy(() => import('./pages/stagiaire/ModulePage'))
const ParcoursConseille = lazy(() => import('./pages/stagiaire/ParcoursConseille'))
const Glossaire = lazy(() => import('./pages/Glossaire'))
const Messagerie = lazy(() => import('./pages/Messagerie'))
const FormateurDashboard = lazy(() => import('./pages/formateur/FormateurDashboard'))
const Groupes = lazy(() => import('./pages/formateur/Groupes'))
const Stagiaires = lazy(() => import('./pages/formateur/Stagiaires'))
const EditeurModule = lazy(() => import('./pages/formateur/EditeurModule'))
const Statistiques = lazy(() => import('./pages/formateur/Statistiques'))

function PageLoader() {
  return <div className="container"><p>Chargement…</p></div>
}

export default function App() {
  const { init, user, loading } = useAuthStore()

  useEffect(() => {
    init()
    initSyncEngine()
  }, [])

  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </Layout>
  )
}
