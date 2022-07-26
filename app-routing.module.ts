import { NgModule } from '@angular/core'
import { CharacterComponent } from './character/character.component'
import { LocationListComponent } from './location-list/location-list.component'
import { RouterModule, Routes } from '@angular/router'
import { LocationComponent } from './location/location.component'
import { EpisodeListComponent } from './episode-list/episode-list.component'
import { EpisodeComponent } from './episode/episode.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'characters/page/1' },
  { path: 'characters/page/:id', component: CharacterComponent },
  { path: 'locations/page/:id', component: LocationListComponent },
  { path: 'locations/:id', component: LocationComponent },
  { path: 'episodes/page/:id', component: EpisodeListComponent },
  { path: 'episodes/:id', component: EpisodeComponent },
  { path: '**', redirectTo: 'characters/page/1' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
