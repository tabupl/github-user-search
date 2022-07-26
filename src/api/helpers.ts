import { RequestCache } from './types'

export const debounce = <T>(
  callFunction: (...args: Array<any>) => Promise<T>,
  waitTime = 500,
): ((...args: Array<any>) => void) => {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Array<any>) => {
    const later = () => {
      clearTimeout(timeout || '')
      callFunction(...args)
    }

    clearTimeout(timeout || '')
    timeout = setTimeout(later, waitTime)
  }
}

export const cacheRequest = <T>(
  callFunction: (...args: Array<any>) => Promise<T>,
  cachingTime = 60000,
): ((...args: Array<any>) => Promise<T>) => {
  const cache: RequestCache = {}

  return (...args: Array<any>) => {
    const cacheKey = Object.entries(args)
      .map((entry) => entry.join('='))
      .join('&')
    if (!cache[cacheKey] || cache[cacheKey].expires < new Date().getTime()) {
      return callFunction(...args).then((res) => {
        cache[cacheKey] = { response: null, expires: new Date().getTime() + cachingTime }
        cache[cacheKey].response = res
        return new Promise<T>((resolve) => resolve(res))
      })
    }
    return new Promise<T>((resolve) => resolve(cache[cacheKey].response as T))
  }
}
