import { Component, OnInit } from '@angular/core'
import { Character } from '../character/character.model'
import { ActivatedRoute } from '@angular/router'
import { CharacterService } from '../character/character.service'
import { Location } from './location.model'
import { LocationService } from './location.service'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent implements OnInit {
  characters: Character[] = []
  id!: string
  location!: Location

  constructor(
    private readonly locationService: LocationService,
    private readonly characterService: CharacterService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this.locationService.getLocationById(this.id).subscribe(data => {
        this.location = data
        for (const characterURL of this.location.residents) {
          this.characterService
            .getCharacterByURL(characterURL)
            .subscribe(data2 => {
              this.characters.push(data2)
            })
        }
      })
    })
  }
}
