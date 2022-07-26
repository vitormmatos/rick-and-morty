import { ResourceBase } from '../common/common.model'

export interface Episode extends ResourceBase {
  air_date: string
  episode: string
  characters: string[]
}
