import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Episode } from './episode.model'
import { Info } from '../common/common.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private readonly SINGLE_EPISODE_API =
    'https://rickandmortyapi.com/api/episode/'

  private readonly ALL_EPISODE_API =
    'https://rickandmortyapi.com/api/episode/?page='

  constructor(private readonly httpClient: HttpClient) {}

  public getEpisodeById(id: string): Observable<Episode> {
    return this.httpClient.get<Episode>(this.SINGLE_EPISODE_API + id)
  }

  public getEpisodesrByURL(url: string): Observable<Episode> {
    return this.httpClient.get<Episode>(url)
  }

  public getEpisodes(page: string): Observable<Info<Episode[]>> {
    return this.httpClient.get<Info<Episode[]>>(this.ALL_EPISODE_API + page)
  }
}
