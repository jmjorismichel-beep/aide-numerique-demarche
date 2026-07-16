import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { dbRemote, isOnline } from '../../lib/firebase'
import { db } from '../../lib/db'
import { saveRecord } from '../../lib/sync'
import { useAuthStore } from '../../store/authStore'

const BACKUP_TABLES = ['users', 'groups', 'moduleContent', 'moduleProgress', 'testResults', 'activityLogs']
const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 30 * 6

export default function Maintenance() {
  const { user } = useAuthStore()
  const [review, setReview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    db.siteMeta.get('contentReview').then(setReview)
  }, [])

  async function marquerRelu() {
    setLoading(true)
    const payload = { id: 'contentReview', lastCheckedAt: new Date().toISOString(), checkedBy: `${user.prenom} ${user.nom}` }
    await saveRecord('siteMeta', payload)
    setReview(payload)
    setLoading(false)
  }

  async function exporterSauvegarde() {
    setExporting(true)
    setMessage('')
    try {
      const dump = {}
      if (dbRemote && isOnline()) {
        // Priorité aux données en ligne (les plus à jour), sinon on retombe sur le local.
        for (const table of BACKUP_TABLES) {
          const snap = await getDocs(collection(dbRemote, table))
          dump[table] = snap.docs.map(d => d.data())
        }
      } else {
        for (const table of BACKUP_TABLES) {
          dump[table] = await db.table(table).toArray()
        }
      }
      const blob = new Blob([JSON.stringify(dump, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `sauvegarde-parcours-numerique-${new Date().toISOString().slice(0, 10)}.json`
      a.click()
      URL.revokeObjectURL(url)
    } catch (e) {
      setMessage("Erreur pendant l'export : " + e.message)
    } finally {
      setExporting(false)
    }
  }

  const monthsSinceReview = review
    ? Math.floor((Date.now() - new Date(review.lastCheckedAt).getTime()) / (1000 * 60 * 60 * 24 * 30))
    : null
  const reviewOverdue = !review || (Date.now() - new Date(review.lastCheckedAt).getTime()) > SIX_MONTHS_MS

  return (
    <div>
      <h2>🛠️ Maintenance du site</h2>

      <div className="card" style={{ marginBottom: 20, borderLeft: `4px solid ${reviewOverdue ? 'var(--red)' : 'var(--green)'}` }}>
        <h3 style={{ marginTop: 0 }}>Relecture du contenu administratif</h3>
        <p style={{ color: 'var(--muted)' }}>
          Les montants et démarches officielles (CAF, RSA, CSS, chèque énergie...) changent régulièrement.
          Pensez à relire le contenu tous les 6 mois environ.
        </p>
        {review ? (
          <p>
            Dernière relecture : <strong>{new Date(review.lastCheckedAt).toLocaleDateString('fr-FR')}</strong> par {review.checkedBy}
            {' '}({monthsSinceReview === 0 ? "moins d'un mois" : `il y a ${monthsSinceReview} mois`})
            {reviewOverdue && <span style={{ color: 'var(--red)', fontWeight: 700 }}> — à relire bientôt</span>}
          </p>
        ) : (
          <p style={{ color: 'var(--red)', fontWeight: 700 }}>Aucune relecture enregistrée pour l'instant.</p>
        )}
        <button className="btn" onClick={marquerRelu} disabled={loading}>
          {loading ? 'Enregistrement…' : "✓ Marquer comme relu aujourd'hui"}
        </button>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 style={{ marginTop: 0 }}>Sauvegarde manuelle</h3>
        <p style={{ color: 'var(--muted)' }}>
          Télécharge une copie de toutes les données importantes (comptes, groupes, contenu des modules, progression, activité)
          dans un fichier JSON, à garder de côté. Ceci ne remplace pas une vraie sauvegarde automatique côté serveur, mais protège contre une erreur de manipulation.
        </p>
        {message && <p style={{ color: 'var(--red)' }}>{message}</p>}
        <button className="btn secondary" onClick={exporterSauvegarde} disabled={exporting}>
          {exporting ? 'Préparation…' : '⬇️ Télécharger une sauvegarde'}
        </button>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Surveillance du site (à faire une fois, en dehors de l'app)</h3>
        <p style={{ color: 'var(--muted)' }}>
          Pour être averti automatiquement si le site tombe en panne, un service gratuit comme{' '}
          <a href="https://uptimerobot.com" target="_blank" rel="noreferrer">UptimeRobot</a> peut vérifier le site
          toutes les 5 minutes et vous envoyer un email s'il ne répond plus. Ajoutez l'adresse de votre site
          (ex. aide-numerique-demarche.netlify.app) comme "moniteur HTTP(s)" — 5 minutes de configuration, gratuit jusqu'à 50 moniteurs.
        </p>
      </div>
    </div>
  )
}
