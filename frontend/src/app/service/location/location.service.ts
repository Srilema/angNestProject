import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  getLocations()
  {
    return this.http.get('lien serv backback');
  }

  postLocation(data:any){
    return this.http.post('lien servback', data);
  }



}