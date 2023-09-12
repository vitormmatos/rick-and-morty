import { Component, Input } from '@angular/core'
import { Character } from '../character.model'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  @Input() characters?: Character[]

  getBadgeStatusColor(character: Character): string {
    switch (character.status) {
      case 'Alive':
        return 'badge-success'
      case 'Dead':
        return 'badge-error'
      default:
        return 'badge-warning'
    }
  }

  getLocation(url: string): string {
    return '/location/' + url.slice(-1)
  }
}
