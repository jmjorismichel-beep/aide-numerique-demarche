export function speak(text) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel() // arrête toute lecture en cours avant d'en démarrer une nouvelle
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'fr-FR'
  utterance.rate = 0.95
  window.speechSynthesis.speak(utterance)
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel()
}

export const speechAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window
