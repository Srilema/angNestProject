import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { avocat } from '../../interface/avocat';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvocatService {

  constructor(private http:HttpClient) { }

  getavocats()
  {
    return this.http.get('http://localhost:3100/avocats').pipe(
      map((data: any) => data as Array<any>)
    );
  }

  postavocat(data:any){
    return this.http.post('http://localhost:3100/avocats', data);
  }

  deleteavocat(id: any) {
    return this.http.delete(`http://localhost:3100/avocat/${id}`);
}

  



}
