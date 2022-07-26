export const apiGet = <T>(url: string, config?: RequestInit): Promise<T> => {
  return fetch(url, config).then((res): Promise<T> => {
    if (!res.ok) {
      return res.json().catch(() => {
        throw new Error(String(res.status))
      })
    }
    return res.json() as Promise<T>
  })
}
