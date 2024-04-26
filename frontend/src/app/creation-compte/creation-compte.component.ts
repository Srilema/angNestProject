import { Component } from '@angular/core';
import { UtilisateurService } from '../service/utilisateur/utilisateur.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrl: './creation-compte.component.css'
})
export class CreationCompteComponent {

  constructor(private utilisateurService: UtilisateurService){}

  submit(data: any) {
    data.role="BAILLEUR";
    console.log(data);
    this.utilisateurService.postUtilisateur(data).subscribe(
      response => {
        console.log('Données envoyées avec succès : ', response);
        // Faire quelque chose après l'envoi des données...
      },
      error => {
        console.error('Erreur lors de l\'envoi des données : ', error);
        // Gérer l'erreur...
      }
    );
  }
}
