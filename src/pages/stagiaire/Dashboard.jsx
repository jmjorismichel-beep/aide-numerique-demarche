import { useEffect, useMemo, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import ModuleCard from '../../components/ModuleCard'
import { getAllModules } from '../../data/getModuleContent'
import { CATEGORIES } from '../../data/modules'
import { useAuthStore } from '../../store/authStore'
import { useI18nStore, LANGUAGES } from '../../store/i18nStore'
import { translateModule } from '../../data/translations/modules'
import { applySimplification } from '../../data/simplify'
import { logActivity } from '../../lib/activity'
import { db } from '../../lib/db'
import VisiteGuidee, { tourDejaVue } from '../../components/VisiteGuidee'
import { hutColorFor } from '../../lib/hutColors'

// Normalisation insensible aux accents/majuscules, réutilisée pour la saisie
// de recherche ET pour l'index multilingue ci-dessous.
function normaliser(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function Dashboard() {
  const { user } = useAuthStore()
  const { lang } = useI18nStore()
  const [modules, setModules] = useState([])
  const [afficherTour, setAfficherTour] = useState(false)

  const demandeFormateurEnAttente = useLiveQuery(
    () => db.formateurRequests.get(user.id).then(r => r && r.status === 'pending' ? r : null),
    [user.id]
  )

  useEffect(() => {
    getAllModules().then(setModules)
    logActivity(user.id, 'Consulte son tableau de bord')
    if (!tourDejaVue()) setAfficherTour(true)
  }, [])

  const translatedModules = modules
    .map(m => translateModule(m, lang))
    .map(m => applySimplification(m, lang, user.niveau_linguistique, user.niveau_informatique))

  const progress = useLiveQuery(
    () => db.moduleProgress.filter(p => p.user_id === user.id && p.completed).toArray(),
    [user.id]
  ) || []
  const completedIds = new Set(progress.map(p => p.module_id))

  const myGroup = useLiveQuery(
    () => user.group_id ? db.groups.get(user.group_id) : Promise.resolve(null),
    [user.group_id]
  )
  const assigned = myGroup?.assigned_modules
  const [recherche, setRecherche] = useState('')

  const visibleModules = (assigned && assigned.length > 0)
    ? translatedModules.filter(m => assigned.includes(m.id))
    : translatedModules

  const total = visibleModules.length
  const done = visibleModules.filter(m => completedIds.has(m.id)).length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  // Index de recherche MULTILINGUE : pour chaque module, on concatène le titre
  // et la description dans TOUTES les langues disponibles (pas seulement la
  // langue d'affichage active). Ainsi, un stagiaire peut taper dans sa propre
  // langue même si l'interface est affichée en français (ou toute autre langue).
  // Calculé une seule fois par chargement de la liste de modules.
  const searchIndex = useMemo(() => {
    const index = {}
    const langCodes = Object.keys(LANGUAGES)
    for (const m of modules) {
      const parts = [m.title, m.description]
      for (const l of langCodes) {
        if (l === 'fr') continue // déjà inclus via m.title / m.description
        const tr = translateModule(m, l)
        if (tr.title) parts.push(tr.title)
        if (tr.description) parts.push(tr.description)
      }
      index[m.id] = normaliser(parts.join(' '))
    }
    return index
  }, [modules])

  const rechercheNormalisee = normaliser(recherche)
  const modulesFiltres = rechercheNormalisee
    ? visibleModules.filter(m => (searchIndex[m.id] || '').includes(rechercheNormalisee))
    : visibleModules

  const byCategory = Object.keys(CATEGORIES).map(cat => ({
    key: cat,
    label: CATEGORIES[cat],
    items: modulesFiltres.filter(m => m.category === cat)
  })).filter(cat => cat.items.length > 0)

  return (
    <div>
      {afficherTour && <VisiteGuidee onFinish={() => setAfficherTour(false)} />}
      {demandeFormateurEnAttente && (
        <div className="card" style={{ marginBottom: 20, borderLeft: '4px solid var(--coral)', background: '#FFF6F2' }}>
          <h3 style={{ marginTop: 0 }}>⏳ Ta demande d'accès formateur est en attente</h3>
          <p style={{ marginBottom: 0 }}>
            Tu as saisi le bon code formateur à l'inscription. Pour des raisons de sécurité, ton compte n'obtient pas ce rôle automatiquement :
            un formateur déjà présent doit d'abord approuver ta demande depuis son espace. En attendant, tu utilises le site normalement, en tant que stagiaire — c'est temporaire, et ça se met à jour automatiquement dès que ta demande est approuvée.
          </p>
        </div>
      )}
      <h2>Bonjour {user.prenom} 👋</h2>
      <p>Niveau linguistique : <strong>{user.niveau_linguistique}</strong> — Choisis un module pour commencer.</p>

      <img src="/diagrams/cabines-plage.svg" alt="" role="presentation" className="beach-huts-banner" />

      <div className="search-modules">
        <span aria-hidden="true">🔎</span>
        <input
          type="search"
          placeholder="Rechercher un module (ex : CAF, mot de passe, titre de séjour...)"
          value={recherche}
          onChange={e => setRecherche(e.target.value)}
          aria-label="Rechercher un module"
        />
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <strong>Ma progression</strong>
          <span>{done} / {total} modules terminés</span>
        </div>
        <div className="progress-bar-track">
          <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {assigned && assigned.length > 0 && (
        <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
          Votre formateur a sélectionné {assigned.length} module(s) pour votre groupe.
        </p>
      )}

      {rechercheNormalisee && byCategory.length === 0 && (
        <p style={{ color: 'var(--muted)', textAlign: 'center', margin: '40px 0' }}>
          Aucun module ne correspond à « {recherche} ». Essaie un autre mot, ou demande à ton formateur.
        </p>
      )}

      {byCategory.map(cat => (
        <div key={cat.key}>
          <div className="category-title" style={{ '--hut-color': hutColorFor(cat.key) }}>{cat.label}</div>
          <div className="grid">
            {cat.items.map(m => <ModuleCard key={m.id} module={m} completed={completedIds.has(m.id)} />)}
          </div>
        </div>
      ))}
    </div>
  )
}
