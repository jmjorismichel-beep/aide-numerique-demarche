import { describe, it, expect } from 'vitest'
import { translateAuthError } from '../src/lib/authErrors'
import { hutColorFor } from '../src/lib/hutColors'
import { scoreToNiveau } from '../src/data/testQuestions'
import { translateModule } from '../src/data/translations/modules'
import { DEFAULT_MODULES, CATEGORIES } from '../src/data/modules'

describe('translateAuthError', () => {
  it('translates known Firebase error codes to French', () => {
    expect(translateAuthError({ code: 'auth/email-already-in-use' })).toMatch(/déjà utilisée/)
    expect(translateAuthError({ code: 'auth/weak-password' })).toMatch(/6 caractères/)
  })
  it('falls back gracefully for unknown errors', () => {
    expect(translateAuthError({ message: 'quelque chose' })).toBe('quelque chose')
    expect(translateAuthError({})).toMatch(/erreur inattendue/)
  })
})

describe('hutColorFor', () => {
  it('always returns the same color for the same module id', () => {
    const a = hutColorFor('dem-caf')
    const b = hutColorFor('dem-caf')
    expect(a).toBe(b)
  })
  it('returns one of the known hut colors', () => {
    const color = hutColorFor('app-windows')
    expect(color).toMatch(/^var\(--hut-/)
  })
})

describe('scoreToNiveau', () => {
  it('maps low scores to débutant', () => {
    expect(scoreToNiveau(0)).toBe('debutant')
    expect(scoreToNiveau(6)).toBe('debutant')
  })
  it('maps high scores to avancé', () => {
    expect(scoreToNiveau(24)).toBe('avance')
    expect(scoreToNiveau(21)).toBe('avance')
  })
  it('maps mid-range scores to moyen or à l\'aise', () => {
    expect(scoreToNiveau(10)).toBe('moyen')
    expect(scoreToNiveau(18)).toBe('aaise')
  })
})

describe('translateModule', () => {
  const sample = { id: 'dem-caf', title: 'La CAF', description: 'Faire ses démarches sur le site de la CAF.' }

  it('returns the module unchanged for French', () => {
    const result = translateModule(sample, 'fr')
    expect(result.title).toBe('La CAF')
    expect(result.titleFr).toBeNull()
  })

  it('translates known modules and keeps a French subtitle', () => {
    const result = translateModule(sample, 'en')
    expect(result.title).not.toBe('La CAF')
    expect(result.titleFr).toBe('La CAF')
  })

  it('falls back to French when no translation exists for a module', () => {
    const unknown = { id: 'does-not-exist', title: 'Titre test' }
    const result = translateModule(unknown, 'en')
    expect(result.title).toBe('Titre test')
  })
})

describe('module catalog integrity', () => {
  it('has no duplicate module ids', () => {
    const ids = DEFAULT_MODULES.map(m => m.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
  it('every module belongs to a known category', () => {
    const categoryKeys = Object.keys(CATEGORIES)
    for (const m of DEFAULT_MODULES) {
      expect(categoryKeys).toContain(m.category)
    }
  })
  it('every module has at least a title and description', () => {
    for (const m of DEFAULT_MODULES) {
      expect(m.title).toBeTruthy()
      expect(m.description).toBeTruthy()
    }
  })
})
