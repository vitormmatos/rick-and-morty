import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html'
})
export class ThemeComponent {
  @Input() themeName!: string
}
