import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Character } from './character.model'
import { Info } from '../common/common.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private readonly CHARACTER_PAGE_API =
    'https://rickandmortyapi.com/api/character/?page='

  constructor(private readonly httpClient: HttpClient) {}

  public getCharacterByURL(url: string): Observable<Character> {
    return this.httpClient.get<Character>(url)
  }

  public getCharacters(page: string): Observable<Info<Character[]>> {
    return this.httpClient.get<Info<Character[]>>(
      this.CHARACTER_PAGE_API + page
    )
  }
}
