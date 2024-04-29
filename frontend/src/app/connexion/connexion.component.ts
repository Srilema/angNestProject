import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnexionService } from '../service/connexion/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private connexionService: ConnexionService,
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
      const pass = data.mdp;
      console.log('mail :',mail);
      console.log('pass:',pass);
      this.connexionService.login(mail, pass).subscribe(
        (data) => {
          console.log('Connexion réussie', data);
          // Récupérer le token depuis la réponse
          //const token = data.token;
          // Stocker le token dans le localStorage ou dans un service
          //localStorage.setItem('token', token);
          // Redirection vers une autre page
          this.router.navigate(['/accueil']);
        },
        (error) => {
          console.error('Erreur de connexion', error);
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }
}
