import { PRIVATE_KEY, PUBLIC_KEY } from '@/constant'
import md5 from 'md5'

export const createHash = (timestamp: number): string => {
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY)
  return hash
}
