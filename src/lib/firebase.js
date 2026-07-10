import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const hasConfig = !!firebaseConfig.apiKey && !!firebaseConfig.projectId

// Si les variables d'env ne sont pas configurées, l'app fonctionne quand même
// en mode 100% local (utile en développement ou en cas de coupure prolongée).
export const firebaseApp = hasConfig
  ? (getApps().length ? getApps()[0] : initializeApp(firebaseConfig))
  : null

export const auth = firebaseApp ? getAuth(firebaseApp) : null
export const dbRemote = firebaseApp ? getFirestore(firebaseApp) : null

export const isOnline = () => typeof navigator !== 'undefined' && navigator.onLine
