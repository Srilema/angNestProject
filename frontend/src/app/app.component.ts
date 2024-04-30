import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  logout(){
    this.authService.logout();
  }
}
