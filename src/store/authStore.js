import { create } from 'zustand'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail
} from 'firebase/auth'
import { db } from '../lib/db'
import { auth, dbRemote, isOnline } from '../lib/firebase'
import { saveRecord } from '../lib/sync'

// Code donné aux formateurs pour qu'ils obtiennent ce rôle dès l'inscription
// (au lieu de devoir modifier leur rôle manuellement dans Firestore).
// Changez-le via la variable d'environnement VITE_FORMATEUR_INVITE_CODE.
const FORMATEUR_INVITE_CODE = import.meta.env.VITE_FORMATEUR_INVITE_CODE || 'FORMATEUR2026'

export const useAuthStore = create((set, get) => ({
  user: null,       // profil applicatif (prénom, nom, niveau, role...)
  loading: true,

  async init() {
    const session = await db.session.get('session')
    if (session?.userId) {
      const user = await db.users.get(session.userId)
      if (user) set({ user })
    }
    set({ loading: false })

    // Si on est en ligne, on rafraîchit le profil depuis Firestore en tâche de fond
    if (dbRemote && auth?.currentUser && isOnline()) {
      const snap = await getDoc(doc(dbRemote, 'users', auth.currentUser.uid))
      if (snap.exists()) {
        const profile = snap.data()
        await db.users.put(profile)
        await db.session.put({ id: 'session', userId: profile.id })
        set({ user: profile })
      }
    }
  },

  /**
   * Inscription. Nécessite une connexion internet la première fois (création
   * du compte sécurisé). Une fois connecté une première fois, l'utilisateur
   * peut ensuite se servir de l'app hors-ligne indéfiniment (session mise en cache).
   * Si `inviteCode` correspond au code formateur, le compte est créé avec le
   * rôle "formateur" ; sinon c'est un compte "stagiaire" classique.
   */
  async signUp({ prenom, nom, email, password, niveauLinguistique, niveauInformatique, inviteCode }) {
    if (!auth || !isOnline()) {
      throw new Error("Une connexion internet est nécessaire pour créer un compte la première fois.")
    }
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    const role = inviteCode && inviteCode.trim() === FORMATEUR_INVITE_CODE ? 'formateur' : 'stagiaire'

    const profile = {
      id: cred.user.uid,
      prenom, nom, email,
      niveau_linguistique: niveauLinguistique || null,
      niveau_informatique: niveauInformatique || null,
      role,
      group_id: null,
      archived: false,
      updated_at: new Date().toISOString()
    }
    await setDoc(doc(dbRemote, 'users', profile.id), profile)
    await db.users.put(profile)
    await db.session.put({ id: 'session', userId: profile.id })
    set({ user: profile })
    return profile
  },

  async signIn({ email, password }) {
    if (auth && isOnline()) {
      const cred = await signInWithEmailAndPassword(auth, email, password)
      const snap = await getDoc(doc(dbRemote, 'users', cred.user.uid))
      if (snap.exists()) {
        const profile = snap.data()
        await db.users.put(profile)
        await db.session.put({ id: 'session', userId: profile.id })
        set({ user: profile })
        return profile
      }
    }
    // Repli hors-ligne : si l'utilisateur s'est déjà connecté sur cet appareil,
    // son profil est déjà en cache local -> on le retrouve par email.
    const local = await db.users.where('email').equals(email).first()
    if (local) {
      await db.session.put({ id: 'session', userId: local.id })
      set({ user: local })
      return local
    }
    throw new Error("Connexion impossible : pas de réseau et aucun compte local trouvé sur cet appareil.")
  },

  async resetPassword(email) {
    if (!auth || !isOnline()) {
      throw new Error("Une connexion internet est nécessaire pour réinitialiser un mot de passe.")
    }
    await sendPasswordResetEmail(auth, email)
  },

  async signOut() {
    if (auth && isOnline()) await firebaseSignOut(auth)
    await db.session.delete('session')
    set({ user: null })
  },

  async updateProfile(patch) {
    const user = get().user
    const updated = { ...user, ...patch }
    await saveRecord('users', updated)
    set({ user: updated })
  }
}))
