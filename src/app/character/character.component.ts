import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html'
})
export class CharacterComponent {

  @Input() character: any
  
  getBadgeStatusColor(character: any): string {
    switch (character.status) {
      case 'Alive':
        return 'badge-success'
      case 'Dead':
        return 'badge-error'
      default:
        return 'badge-warning'
    }
  }
}
