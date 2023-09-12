import { Location } from './location.model'
import { HttpClient } from '@angular/common/http'
import { Info } from '../common/common.model'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly LOCATION_URL =
    'https://rickandmortyapi.com/api/location/?name='

  private readonly SINGLE_LOCATION_API =
    'https://rickandmortyapi.com/api/location/'

  private readonly ALL_LOCATION_API =
    'https://rickandmortyapi.com/api/location?page='

  constructor(private readonly httpClient: HttpClient) {}

  public getLocationByName(name: string): Observable<Location> {
    return this.httpClient.get<Location>(this.LOCATION_URL + name)
  }

  public getLocationById(id: string): Observable<Location> {
    return this.httpClient.get<Location>(this.SINGLE_LOCATION_API + id)
  }

  public getLocations(page: string): Observable<Info<Location[]>> {
    return this.httpClient.get<Info<Location[]>>(this.ALL_LOCATION_API + page)
  }
}
