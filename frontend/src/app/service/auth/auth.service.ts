import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean
  constructor(private http: HttpClient, private router: Router) { }

  login(mail: string, pass: string) {
    this.isAuthenticated = true;
    console.log('login',mail,pass)
    return this.http.post('http://localhost:3100/auth/login', { mail, pass },
     {headers: new HttpHeaders({
      'Content-Type': "application/json",
    })});
  }
  logout() {
    // Réinitialiser l'état d'authentification et rediriger vers la page de connexion
    this.isAuthenticated = false;
    this.router.navigate(['/connexion']);
  }
}
