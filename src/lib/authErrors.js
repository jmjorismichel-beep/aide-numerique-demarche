const MESSAGES = {
  'auth/email-already-in-use': "Cette adresse email est déjà utilisée par un compte existant.",
  'auth/invalid-email': "Cette adresse email n'est pas valide.",
  'auth/weak-password': "Le mot de passe doit contenir au moins 6 caractères.",
  'auth/user-not-found': "Aucun compte ne correspond à cette adresse email.",
  'auth/wrong-password': "Le mot de passe est incorrect.",
  'auth/invalid-credential': "Adresse email ou mot de passe incorrect.",
  'auth/too-many-requests': "Trop de tentatives. Merci de patienter quelques minutes avant de réessayer.",
  'auth/network-request-failed': "Problème de connexion internet. Réessaie quand tu seras en ligne.",
  'auth/missing-email': "Merci d'indiquer une adresse email."
}

export function translateAuthError(error) {
  const code = error?.code
  if (code && MESSAGES[code]) return MESSAGES[code]
  return error?.message || "Une erreur inattendue s'est produite. Réessaie dans un instant."
}
