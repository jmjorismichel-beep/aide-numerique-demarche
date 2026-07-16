import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '../../lib/db'
import { saveRecord } from '../../lib/sync'
import { useAuthStore } from '../../store/authStore'

export default function Formateurs() {
  const { user } = useAuthStore()
  const formateurs = useLiveQuery(() => db.users.filter(u => u.role === 'formateur').toArray()) || []
  const [confirmingId, setConfirmingId] = useState(null)

  async function retrograder(formateur) {
    await saveRecord('users', { ...formateur, role: 'stagiaire' })
    setConfirmingId(null)
  }

  return (
    <div>
      <h2>👥 Formateurs</h2>
      <p style={{ color: 'var(--muted)' }}>
        Liste des comptes ayant accès à l'espace formateur. Utile pour vérifier qui a accès, et retirer l'accès à quelqu'un si besoin (départ, erreur, code partagé par erreur).
      </p>
      <div className="card">
        <table className="table-simple">
          <thead><tr><th>Nom</th><th>Email</th><th>Action</th></tr></thead>
          <tbody>
            {formateurs.map(f => (
              <tr key={f.id}>
                <td>{f.prenom} {f.nom} {f.id === user.id && <span className="badge online">Toi</span>}</td>
                <td>{f.email}</td>
                <td>
                  {f.id === user.id ? (
                    <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>Tu ne peux pas te rétrograder toi-même</span>
                  ) : confirmingId === f.id ? (
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn danger" onClick={() => retrograder(f)}>Confirmer</button>
                      <button className="btn secondary" onClick={() => setConfirmingId(null)}>Annuler</button>
                    </div>
                  ) : (
                    <button className="btn secondary" onClick={() => setConfirmingId(f.id)}>Rétrograder en stagiaire</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
