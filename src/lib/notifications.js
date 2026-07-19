// Notifications de bureau via l'API Notification du navigateur.
//
// LIMITE IMPORTANTE À CONNAÎTRE : ces notifications ne fonctionnent que si le
// site est ouvert dans un onglet (même en arrière-plan). Si le navigateur est
// complètement fermé, aucune notification n'est envoyée — un vrai système de
// notification "push" qui fonctionnerait même site fermé nécessiterait un
// serveur d'envoi (Firebase Cloud Messaging + Cloud Functions), qui requiert
// le plan payant Blaze de Firebase. Cette solution reste gratuite et couvre
// le cas le plus courant : quelqu'un qui laisse l'onglet ouvert pendant que
// le formateur ou un autre stagiaire lui écrit.

const PERMISSION_KEY = 'parcours_numerique_notif_permission_asked'

export function notificationsSupported() {
  return typeof window !== 'undefined' && 'Notification' in window
}

export async function requestNotificationPermission() {
  if (!notificationsSupported()) return 'unsupported'
  if (Notification.permission === 'granted' || Notification.permission === 'denied') {
    return Notification.permission
  }
  try {
    const result = await Notification.requestPermission()
    localStorage.setItem(PERMISSION_KEY, 'asked')
    return result
  } catch {
    return 'denied'
  }
}

export function shouldAskForPermission() {
  if (!notificationsSupported()) return false
  if (Notification.permission !== 'default') return false
  return !localStorage.getItem(PERMISSION_KEY)
}

export function notifyNewMessage(senderName, preview) {
  if (!notificationsSupported() || Notification.permission !== 'granted') return
  // Pas besoin de notifier si l'utilisateur a déjà l'onglet au premier plan.
  if (document.visibilityState === 'visible') return
  try {
    new Notification(`Nouveau message de ${senderName}`, {
      body: preview?.slice(0, 100) || 'Vous avez reçu un nouveau message.',
      icon: '/icon-192.png',
      tag: 'parcours-numerique-message' // évite d'empiler trop de notifications
    })
  } catch {
    // Certains navigateurs mobiles n'autorisent pas new Notification() directement ; on échoue silencieusement.
  }
}
