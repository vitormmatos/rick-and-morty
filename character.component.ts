import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Character } from './character.model'
import { CharacterService } from './character.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  characters!: Character[]
  public id = this.route.snapshot.paramMap.get('id')

  constructor (
    private readonly service: CharacterService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.service.getCharacters(this.id ?? '1').subscribe(data => {
      this.characters = data.results
    })
  }
}
