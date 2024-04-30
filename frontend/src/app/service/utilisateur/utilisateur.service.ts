import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  getUtilisateurs()
  {
    return this.http.get('http://localhost:3100/utilisateurs').pipe(
      map((data: any) => data as Array<any>)
    );
  }

  postUtilisateur(data:any){
    return this.http.post('http://localhost:3100/utilisateurs', data);
  }

  deleteUtilisateur(id:number)
  {
    return this.http.delete('http://localhost:3100/utilisateurs/${id}')
  }
}
