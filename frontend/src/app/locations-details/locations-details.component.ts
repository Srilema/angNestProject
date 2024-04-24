import { Component } from '@angular/core';
import { LocationService } from '../service/location/location.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations-details',
  templateUrl: './locations-details.component.html',
  styleUrl: './locations-details.component.css'
})
export class LocationsDetailsComponent {
locationDetail:any=[];
locationId:any;

constructor(private locationService:LocationService,private activeRoute:ActivatedRoute){}

ngOnInit(){
  this.locationId= this.activeRoute.snapshot.paramMap.get('id');

  console.log('id',this.locationId);
  
  this.locationService.getLocations().subscribe((locations: any[]) => {
    this.locationDetail = locations.filter(x => x.id == this.locationId);
  });
}
}




