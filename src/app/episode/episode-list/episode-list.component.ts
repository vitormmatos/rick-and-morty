import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Episode } from '../episode.model'
import { EpisodeService } from '../episode.service'

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html'
})
export class EpisodeListComponent implements OnInit {
  episodes!: Episode[]
  id: string | null = this.route?.snapshot?.paramMap.get('id')

  constructor (
    private readonly service: EpisodeService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.service.getEpisodes(this.id ?? '1').subscribe(data => {
        this.episodes = data.results
      })
    })
  }
}
