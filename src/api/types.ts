export type RequestCache = {
  [id: string]: {
    response: Record<string, any> | null
    expires: number
  }
}
