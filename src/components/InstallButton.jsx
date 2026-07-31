import { useEffect, useState } from 'react'

const DISMISSED_KEY = 'parcours_numerique_install_dismissed'

function isStandalone() {
  return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true
}
function isIOS() {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showIosHelp, setShowIosHelp] = useState(false)
  const [installed, setInstalled] = useState(isStandalone())
  const [dismissed, setDismissed] = useState(() => {
    try { return localStorage.getItem(DISMISSED_KEY) === '1' } catch { return false }
  })

  useEffect(() => {
    // Chrome, Edge, la plupart des navigateurs Android et les Chromium sur
    // Windows/Mac/Linux déclenchent cet événement : on peut alors proposer
    // une installation en un clic, sans passer par les menus du navigateur.
    function onBeforeInstall(e) {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)
    window.addEventListener('appinstalled', () => setInstalled(true))
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstall)
  }, [])

  if (installed || dismissed) return null
  // Rien à proposer : ni bouton natif disponible, ni iOS (donc probablement
  // un navigateur qui ne gère pas l'installation, ex. Firefox) — on ne
  // montre rien plutôt qu'un bouton qui ne ferait rien.
  if (!deferredPrompt && !isIOS()) return null

  function fermer() {
    try { localStorage.setItem(DISMISSED_KEY, '1') } catch {}
    setDismissed(true)
  }

  async function installer() {
    if (isIOS()) { setShowIosHelp(true); return }
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') setInstalled(true)
    setDeferredPrompt(null)
  }

  return (
    <>
      <div className="install-banner">
        <span>📲 Installer ce site comme une application sur cet appareil ?</span>
        <button className="btn" style={{ padding: '6px 14px' }} onClick={installer}>Installer</button>
        <button className="btn secondary" style={{ padding: '6px 14px' }} onClick={fermer}>Non merci</button>
      </div>

      {showIosHelp && (
        <div role="dialog" aria-modal="true" className="modal-overlay" onClick={() => setShowIosHelp(false)}>
          <div className="card" style={{ maxWidth: 380 }} onClick={e => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>📲 Installer sur iPhone / iPad</h3>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem' }}>
              Sur iPhone et iPad, Apple demande de passer par ces 3 étapes (aucun site ne peut installer automatiquement) :
            </p>
            <ol style={{ paddingLeft: 20 }}>
              <li>Appuie sur le bouton <strong>Partager</strong> (le carré avec une flèche vers le haut ⬆️), en bas de l'écran dans Safari</li>
              <li>Fais défiler et appuie sur <strong>« Sur l'écran d'accueil »</strong></li>
              <li>Appuie sur <strong>« Ajouter »</strong> en haut à droite</li>
            </ol>
            <p style={{ fontSize: '.8rem', color: 'var(--muted)' }}>⚠️ Ça ne fonctionne que dans Safari, pas dans Chrome ou une autre application sur iPhone/iPad.</p>
            <button className="btn" onClick={() => setShowIosHelp(false)}>J'ai compris</button>
          </div>
        </div>
      )}
    </>
  )
}
