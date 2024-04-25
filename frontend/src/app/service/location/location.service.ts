import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from '../../interface/location';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  getLocations()
  {
    return this.http.get('http://localhost:3100/locations').pipe(
      map((data: any) => data as Array<any>)
    );
  }

  postLocation(data:any){
    return this.http.post('http://localhost:3100/locations', data);
  }

  deleteLocation(id: any) {
    return this.http.delete(`http://localhost:3100/location/${id}`);
}

  



}
