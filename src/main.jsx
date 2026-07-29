import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './index.css'
import App from './App.jsx'

// Vérifie régulièrement s'il existe une nouvelle version du site (nouveaux
// modules, corrections...) et l'applique automatiquement — sans ça, un
// stagiaire qui garde le site ouvert ou revient souvent pouvait rester
// bloqué longtemps sur une ancienne version en cache, sans le savoir.
const updateSW = registerSW({
  immediate: true,
  onRegisteredSW(swUrl, registration) {
    if (!registration) return
    // Vérifie toutes les heures...
    setInterval(() => registration.update(), 60 * 60 * 1000)
    // ...et aussi chaque fois que la personne revient sur l'onglet, pour
    // capter les mises à jour sans attendre l'heure pile.
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') registration.update()
    })
  },
  onNeedRefresh() {
    // Une nouvelle version est prête : on l'applique tout de suite. Le
    // rechargement ne coupe rien en cours, la progression et les messages
    // sont déjà sauvegardés localement et se resynchronisent normalement.
    updateSW(true)
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
