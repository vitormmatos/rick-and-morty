import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CharacterPageComponent } from './character-page/character-page.component'
import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterPageComponent, NavbarComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
