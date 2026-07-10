// Redimensionne et compresse une image avant de l'enregistrer en base64,
// pour rester largement sous la limite de 1 Mo par document Firestore.
export function fileToCompressedDataUrl(file, maxWidth = 480, quality = 0.7) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error("Impossible de lire l'image"))
    reader.onload = () => {
      const img = new Image()
      img.onerror = () => reject(new Error("Image invalide"))
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width)
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(img.width * scale)
        canvas.height = Math.round(img.height * scale)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        resolve(canvas.toDataURL('image/jpeg', quality))
      }
      img.src = reader.result
    }
    reader.readAsDataURL(file)
  })
}
