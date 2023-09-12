import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { LocationService } from '../location.service'
import { Location } from '../location.model'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html'
})
export class LocationListComponent implements OnInit {
  locations?: Location[]
  expanded = false
  id!: string

  constructor(
    private readonly service: LocationService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = String(params['id'])
      this.service.getLocations(this.id).subscribe(data => {
        this.locations = data.results
      })
    })
  }
}
