import { Network } from './network'
import { MyStorage } from '@/helpers/storage'

const DEFAULT_EXPIRES = 3

export const fetcher = async <T>(url: string, expires: number = DEFAULT_EXPIRES) => {
  const v = MyStorage.get(url, expires)
  if (v) return { data: v as T, error: undefined }

  const res = await Network.get<T>(url)
  if (res.data) MyStorage.set<T>(url, res.data)
  return res
}
