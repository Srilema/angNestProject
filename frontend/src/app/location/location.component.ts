import { Component } from '@angular/core';
import { LocationService } from '../service/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  locations: any

  constructor(private locationService: LocationService) {
  }
  ngOnInit() {
    let locationData = this.locationService.getLocations();

    locationData.subscribe(res => this.locations = res);
    console.log('locations : ',this.locations);
  }
}

