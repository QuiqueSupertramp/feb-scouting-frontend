export class MyStorage {
  static set = <T>(key: string, value: T) =>
    sessionStorage.setItem(key, JSON.stringify({ date: Date.now(), value }))

  static get = <T>(key: string, expires: number) => {
    const res = sessionStorage.getItem(key)
    if (res === null) return null

    const parsed = JSON.parse(res)
    if (!parsed.date) return null

    const now = Date.now()
    const isExpired = parsed.date + expires * 3600000 < now
    return isExpired ? null : (parsed.value as T)
  }

  static remove = (key: string) => sessionStorage.removeItem(key)
}
