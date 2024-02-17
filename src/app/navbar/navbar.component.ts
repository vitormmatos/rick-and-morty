import { Component } from '@angular/core'
import { ThemeChangerComponent } from '../theme-changer/theme-changer.component'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeChangerComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}
