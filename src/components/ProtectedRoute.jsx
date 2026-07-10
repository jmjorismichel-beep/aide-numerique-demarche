import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuthStore()
  if (loading) return <div className="container">Chargement…</div>
  if (!user) return <Navigate to="/connexion" replace />
  if (role && user.role !== role) return <Navigate to={user.role === 'formateur' ? '/formateur' : '/dashboard'} replace />
  return children
}
