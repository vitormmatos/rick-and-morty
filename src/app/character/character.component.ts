import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Character } from './character.model'
import { CharacterService } from './character.service'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html'
})
export class CharacterComponent implements OnInit {
  characters?: Character[]
  id!: string

  constructor(
    private readonly service: CharacterService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this.service.getCharacters(this.id).subscribe(data => {
        this.characters = data.results
      })
    })
  }
}
