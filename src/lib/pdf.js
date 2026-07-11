import { jsPDF } from 'jspdf'

export function exportModuleToPdf(module) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const marginX = 48
  let y = 60

  doc.setFillColor(15, 92, 102)
  doc.rect(0, 0, 595, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(12)
  doc.text('Parcours Numérique', marginX, 26)

  doc.setTextColor(31, 41, 55)
  doc.setFontSize(20)
  y = 80
  doc.text(module.title, marginX, y)

  doc.setFontSize(11)
  doc.setTextColor(107, 114, 128)
  y += 24
  const descLines = doc.splitTextToSize(module.description || '', 500)
  doc.text(descLines, marginX, y)
  y += descLines.length * 14 + 20

  doc.setTextColor(31, 41, 55)
  const steps = module.steps || []
  if (steps.length === 0) {
    doc.setFontSize(12)
    doc.text("Ce module n'a pas encore de contenu détaillé.", marginX, y)
  }
  steps.forEach((step, i) => {
    if (y > 760) { doc.addPage(); y = 60 }
    doc.setFontSize(13)
    doc.setTextColor(15, 92, 102)
    doc.text(`${i + 1}. ${step.title}`, marginX, y)
    y += 18
    doc.setFontSize(11)
    doc.setTextColor(31, 41, 55)
    const lines = doc.splitTextToSize(step.text || '', 500)
    doc.text(lines, marginX + 12, y)
    y += lines.length * 14 + 16
  })

  doc.save(`${module.title.replace(/\s+/g, '_')}.pdf`)
}
