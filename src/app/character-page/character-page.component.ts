import { Component } from '@angular/core'
import { CharacterListComponent } from '../character-list/character-list.component'
import { Apollo } from 'apollo-angular'
import { Subscription } from 'rxjs'
import { getCharacters } from '../graphql.operations'

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './character-page.component.html'
})
export class CharacterPageComponent {
  characters: any

  private querySubscription!: Subscription

  constructor(private readonly apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery({ query: getCharacters(1) })
      .valueChanges.subscribe(({ data }: any) => {
        this.characters = data.characters.results
      })
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe()
  }
}
