import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
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
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit (): void {
    this.service.getLocations(this.id ?? '1').subscribe(data => {
      this.locations = data.results
    })
  }

  goToPage (id: number): void {
    void this.router.navigate([`locations/${id}`])
    setTimeout(() => {
      window.location.reload()
    }, 10)
  }
}
