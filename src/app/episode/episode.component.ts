import { Component, OnInit } from '@angular/core'
import { Character } from '../character/character.model'
import { ActivatedRoute } from '@angular/router'
import { CharacterService } from '../character/character.service'
import { Episode } from './episode.model'
import { EpisodeService } from './episode.service'

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html'
})
export class EpisodeComponent implements OnInit {
  characters: Character[] = []
  id: string | null = this.route?.snapshot?.paramMap.get('id')
  episode!: Episode

  constructor (
    private readonly episodeService: EpisodeService,
    private readonly characterService: CharacterService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.episodeService.getEpisodeById(this.id ?? '1').subscribe(data => {
      this.episode = data
      for (const characterURL of this.episode.characters) {
        this.characterService
          .getCharacterByURL(characterURL)
          .subscribe(data2 => {
            this.characters.push(data2)
          })
      }
    })
  }
}
