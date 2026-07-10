import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './db'

export function useUnreadCount(userId) {
  const count = useLiveQuery(
    () => userId
      ? db.messages.filter(m => m.recipient_id === userId && m.read === false).count()
      : Promise.resolve(0),
    [userId]
  )
  return count || 0
}
