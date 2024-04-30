import { Component } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.css'
})
export class CreationCompteComponent {

  constructor(private utilisateurService: UtilisateurService,private router : Router ){}

  submit(data: any) {
    data.role="BAILLEUR";
    console.log(data);
    this.utilisateurService.postUtilisateur(data).subscribe(
      response => {
        console.log('Données envoyées avec succès : ', response);
       
        if (response) {
          console.log('response : ', response);
          // Naviguer vers une autre page si le formulaire est valide
          this.router.navigate(['/connexion']);
        }
      },
      error => {
        console.error('Erreur lors de l\'envoi des données : ', error);
        // Gérer l'erreur...
      }
    );
    
  }
}
