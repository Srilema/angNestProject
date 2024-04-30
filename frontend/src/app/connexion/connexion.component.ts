import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';



@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
loginForm!: FormGroup;
mail:string;
pass:string;
isAuthenticated: boolean = false;
idConnexion:any
data:any

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', Validators.required]
    });
  }

  onSubmit(data: any) {

    if (data!== null) {
      const mail =data.mail;
      const pass = data.pass;
      console.log('mail :',mail);
      console.log('pass:',pass);
      this.authService.login(mail, pass).subscribe(
        (data) => {
          console.log('Connexion réussie', data);
          this.isAuthenticated = true;
          this.router.navigate(['/accueil']);
        },
        (error) => {
          console.error('Erreur de connexion', error);
          this.isAuthenticated = false;
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
  
  logout() {
    // Réinitialiser l'état d'authentification et rediriger vers la page de connexion
    this.isAuthenticated = false;
    this.router.navigate(['/connexion']);
  }

}
