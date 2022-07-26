export interface ResourceBase {
  id: number
  name: string
  url: string
  created: string
}

export interface Info<T> {
  info?: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results?: T
}
