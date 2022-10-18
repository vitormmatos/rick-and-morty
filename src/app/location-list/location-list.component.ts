import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { LocationService } from '../location/location.service'
import { Location } from '../location/location.model'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html'
})
export class LocationListComponent implements OnInit {
  locations: Location[] | undefined
  expanded: boolean = false
  public id = this.route.snapshot.paramMap.get('id')

  constructor (
    private readonly service: LocationService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit (): void {
    this.service.getLocations(this.id ?? '1').subscribe(data => {
      this.locations = data.results
    })
  }
}
