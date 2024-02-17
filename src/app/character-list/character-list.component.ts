import { Component, Input } from '@angular/core'
import { CharacterComponent } from '../character/character.component'

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterComponent],
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  @Input() characters: any
}
