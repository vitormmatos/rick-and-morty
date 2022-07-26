import { ResourceBase } from '../common/common.model'

export interface Location extends ResourceBase {
  type: string
  dimension: string
  residents: string[]
}
