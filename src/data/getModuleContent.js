import { db } from '../lib/db'
import { DEFAULT_MODULES } from './modules'

export async function getAllModules() {
  const overrides = await db.moduleContent.toArray()
  const overrideMap = Object.fromEntries(overrides.map(o => [o.id, o]))
  return DEFAULT_MODULES.map(m => mergeModule(m, overrideMap[m.id]))
}

export async function getModule(id) {
  const base = DEFAULT_MODULES.find(m => m.id === id)
  if (!base) return null
  const override = await db.moduleContent.get(id)
  return mergeModule(base, override)
}

function mergeModule(base, override) {
  if (!override) return { ...base, steps: base.steps || [], documents: base.documents || [], quiz: base.quiz || null, edited: false }
  return {
    ...base,
    title: override.title ?? base.title,
    description: override.description ?? base.description,
    steps: override.steps ?? base.steps ?? [],
    documents: override.documents ?? base.documents ?? [],
    quiz: override.quiz ?? base.quiz ?? null,
    edited: true,
    updated_at: override.updated_at,
    history: override.history || []
  }
}
