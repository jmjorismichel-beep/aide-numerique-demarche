import { useEffect, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db, uid } from '../lib/db'
import { useAuthStore } from '../store/authStore'
import { saveRecord } from '../lib/sync'

function makeThreadId(a, b) { return [a, b].sort().join('__') }

export default function Messagerie() {
  const { user } = useAuthStore()
  const isFormateur = user.role === 'formateur'
  const [contactId, setContactId] = useState(null)
  const [text, setText] = useState('')

  const contacts = useLiveQuery(
    () => db.users
      .filter(u => (isFormateur ? u.role === 'stagiaire' : u.role === 'formateur') && !u.archived)
      .toArray(),
    [isFormateur]
  ) || []

  useEffect(() => { if (!contactId && contacts.length) setContactId(contacts[0].id) }, [contacts])

  const messages = useLiveQuery(
    () => contactId
      ? db.messages.where('thread_id').equals(makeThreadId(user.id, contactId)).sortBy('created_at')
      : Promise.resolve([]),
    [contactId]
  ) || []

  async function envoyer(e) {
    e.preventDefault()
    if (!text.trim() || !contactId) return
    await saveRecord('messages', {
      id: uid(),
      thread_id: makeThreadId(user.id, contactId),
      sender_id: user.id,
      recipient_id: contactId,
      text: text.trim(),
      created_at: new Date().toISOString()
    })
    setText('')
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 20 }}>
      <div className="card">
        <h3>{isFormateur ? 'Stagiaires' : 'Choisir un formateur'}</h3>
        {contacts.length === 0 && <p style={{ color: 'var(--muted)' }}>Aucun contact disponible.</p>}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {contacts.map(c => (
            <li key={c.id}>
              <button
                className="btn secondary"
                style={{ width: '100%', textAlign: 'left', background: c.id === contactId ? 'var(--blue)' : undefined, color: c.id === contactId ? 'white' : undefined }}
                onClick={() => setContactId(c.id)}
              >
                {c.prenom} {c.nom}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Conversation</h3>
        <div className="chat-thread">
          {messages.length === 0 && <p style={{ color: 'var(--muted)' }}>Aucun message pour l'instant.</p>}
          {messages.map(m => (
            <div key={m.id} className={`bubble ${m.sender_id === user.id ? 'mine' : 'theirs'}`}>
              {m.text}
              <time>{new Date(m.created_at).toLocaleString('fr-FR')}</time>
            </div>
          ))}
        </div>
        <form onSubmit={envoyer} style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <input
            style={{ flex: 1, padding: '10px 12px', borderRadius: 10, border: '1.5px solid #d1d5db' }}
            placeholder="Écrire un message…"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className="btn" type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  )
}
