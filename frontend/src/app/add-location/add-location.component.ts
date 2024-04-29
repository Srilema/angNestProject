import { Component } from '@angular/core';
import { LocationService } from '../service/location/location.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.css'
})
export class AddLocationComponent {

  constructor(private locationService: LocationService){}

  submit(data: any) {
    console.log(data);
    this.locationService.postLocation(data).subscribe(
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
