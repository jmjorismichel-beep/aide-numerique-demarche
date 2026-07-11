import { useEffect, useRef, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db, uid } from '../lib/db'
import { useAuthStore } from '../store/authStore'
import { saveRecord } from '../lib/sync'
import { fileToCompressedDataUrl } from '../lib/imageCompress'

function makeThreadId(a, b) { return [a, b].sort().join('__') }

export default function Messagerie() {
  const { user } = useAuthStore()
  const isFormateur = user.role === 'formateur'
  const [contactId, setContactId] = useState(null)
  const [text, setText] = useState('')
  const [pendingImage, setPendingImage] = useState(null)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const contacts = useLiveQuery(
    () => db.users
      .filter(u => (isFormateur ? u.role === 'stagiaire' : u.role === 'formateur') && !u.archived)
      .toArray(),
    [isFormateur]
  ) || []

  // Compte les messages non lus par contact, pour afficher un badge dans la liste
  const allMyMessages = useLiveQuery(
    () => db.messages.filter(m => m.recipient_id === user.id && m.read === false).toArray(),
    [user.id]
  ) || []
  const unreadByContact = {}
  for (const m of allMyMessages) {
    unreadByContact[m.sender_id] = (unreadByContact[m.sender_id] || 0) + 1
  }

  useEffect(() => { if (!contactId && contacts.length) setContactId(contacts[0].id) }, [contacts])

  const messages = useLiveQuery(
    () => contactId
      ? db.messages.where('thread_id').equals(makeThreadId(user.id, contactId)).sortBy('created_at')
      : Promise.resolve([]),
    [contactId]
  ) || []

  // Marque comme lus les messages reçus de ce contact dès l'ouverture du fil
  useEffect(() => {
    if (!contactId || messages.length === 0) return
    const unread = messages.filter(m => m.recipient_id === user.id && m.read === false)
    unread.forEach(m => saveRecord('messages', { ...m, read: true }))
  }, [contactId, messages.length])

  async function choisirImage(e) {
    const file = e.target.files?.[0]
    e.target.value = '' // permet de resélectionner le même fichier plus tard
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError("Seules les images sont acceptées (photo, capture d'écran).")
      return
    }
    setError('')
    try {
      const dataUrl = await fileToCompressedDataUrl(file)
      setPendingImage(dataUrl)
    } catch {
      setError("Impossible de charger cette image, réessaie avec une autre.")
    }
  }

  async function envoyer(e) {
    e.preventDefault()
    if ((!text.trim() && !pendingImage) || !contactId) return
    setSending(true)
    try {
      await saveRecord('messages', {
        id: uid(),
        thread_id: makeThreadId(user.id, contactId),
        sender_id: user.id,
        recipient_id: contactId,
        text: text.trim(),
        image: pendingImage || null,
        read: false,
        created_at: new Date().toISOString()
      })
      setText('')
      setPendingImage(null)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="two-col-layout" style={{ gridTemplateColumns: '260px 1fr' }}>
      <div className="card">
        <h3>{isFormateur ? 'Stagiaires' : 'Choisir un formateur'}</h3>
        {contacts.length === 0 && <p style={{ color: 'var(--muted)' }}>Aucun contact disponible.</p>}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {contacts.map(c => (
            <li key={c.id}>
              <button
                className="btn secondary"
                style={{ width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: c.id === contactId ? 'var(--blue)' : undefined, color: c.id === contactId ? 'white' : undefined }}
                onClick={() => setContactId(c.id)}
              >
                <span>{c.prenom} {c.nom}</span>
                {unreadByContact[c.id] > 0 && <span className="unread-dot">{unreadByContact[c.id]}</span>}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Conversation</h3>
        <p style={{ fontSize: '.8rem', color: 'var(--muted)', marginTop: -6 }}>
          ⚠️ Évite d'envoyer une photo de tes papiers (passeport, titre de séjour...) par message. Pour ça, préviens plutôt ton formateur en personne.
        </p>
        <div className="chat-thread">
          {messages.length === 0 && <p style={{ color: 'var(--muted)' }}>Aucun message pour l'instant.</p>}
          {messages.map(m => (
            <div key={m.id} className={`bubble ${m.sender_id === user.id ? 'mine' : 'theirs'}`}>
              {m.image && <img src={m.image} alt="Pièce jointe envoyée dans la conversation" />}
              {m.text}
              <time>{new Date(m.created_at).toLocaleString('fr-FR')}</time>
            </div>
          ))}
        </div>

        {error && <p style={{ color: 'var(--red)', fontSize: '.85rem', marginTop: 8 }}>{error}</p>}

        {pendingImage && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <img src={pendingImage} alt="Aperçu de la photo à envoyer" style={{ maxWidth: 100, borderRadius: 8 }} />
            <button className="btn secondary" onClick={() => setPendingImage(null)}>Retirer</button>
          </div>
        )}

        <form onSubmit={envoyer} style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={choisirImage}
            style={{ display: 'none' }}
          />
          <button type="button" className="attach-btn" onClick={() => fileInputRef.current?.click()} title="Joindre une photo" aria-label="Joindre une photo">
            📷
          </button>
          <input
            style={{ flex: 1, padding: '10px 12px', borderRadius: 10, border: '1.5px solid #d1d5db' }}
            placeholder="Écrire un message…"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button className="btn" type="submit" disabled={sending}>{sending ? 'Envoi…' : 'Envoyer'}</button>
        </form>
      </div>
    </div>
  )
}
