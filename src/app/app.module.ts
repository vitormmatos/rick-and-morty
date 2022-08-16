import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CharacterComponent } from './character/character.component'
import { LocationListComponent } from './location-list/location-list.component'
import { LocationComponent } from './location/location.component'
import { NavbarComponent } from './navbar/navbar.component'
import { ThemeChangerComponent } from './theme-changer/theme-changer.component'
import { PaginatorComponent } from './paginator/paginator.component'
import { CharacterListingComponent } from './character-listing/character-listing.component'
import { EpisodeComponent } from './episode/episode.component'
import { EpisodeListComponent } from './episode-list/episode-list.component'

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    LocationListComponent,
    LocationComponent,
    NavbarComponent,
    ThemeChangerComponent,
    PaginatorComponent,
    CharacterListingComponent,
    EpisodeComponent,
    EpisodeListComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
