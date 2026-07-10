import { saveRecord } from './sync'
import { uid } from './db'

export async function logActivity(userId, action, moduleId = null) {
  await saveRecord('activityLogs', {
    id: uid(),
    user_id: userId,
    action,
    module_id: moduleId,
    created_at: new Date().toISOString()
  })
}
