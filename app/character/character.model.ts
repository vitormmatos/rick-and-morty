import { ResourceBase } from '../common/common.model'

interface DetailedData {
  name: string
  url: string
}

export interface Character extends ResourceBase {
  status: string
  species: string
  type: string
  gender: string
  origin: DetailedData
  location: DetailedData
  image: string
  episode: string[]
}
