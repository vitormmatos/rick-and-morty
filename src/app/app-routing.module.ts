import { NgModule } from '@angular/core'
import { CharacterComponent } from './character/character.component'
import { LocationListComponent } from './location/location-list/location-list.component'
import { RouterModule, Routes } from '@angular/router'
import { LocationComponent } from './location/location.component'
import { EpisodeListComponent } from './episode/episode-list/episode-list.component'
import { EpisodeComponent } from './episode/episode.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character/page/1' },
  { path: 'character/page/:id', component: CharacterComponent },
  { path: 'location/page/:id', component: LocationListComponent },
  { path: 'location/:id', component: LocationComponent },
  { path: 'episode/page/:id', component: EpisodeListComponent },
  { path: 'episode/:id', component: EpisodeComponent },
  { path: '**', redirectTo: 'character/page/1' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
