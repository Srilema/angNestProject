import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    console.log('login',email,password)
    return this.http.post('http://localhost:3100/auth/login', { email, password });
  }
}
