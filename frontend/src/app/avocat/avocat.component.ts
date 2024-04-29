import { Component } from '@angular/core';
import { AvocatService } from '../service/avocat/avocat.service';

@Component({
  selector: 'app-avocat',
  templateUrl: './avocat.component.html',
  styleUrl: './avocat.component.css'
})
export class AvocatComponent {
  avocats: any

  constructor(private avocatService: AvocatService) {
  }
  ngOnInit() {
    let avocatData = this.avocatService.getavocats();

    avocatData.subscribe(res => this.avocats = res);
    console.log('avocats : ',this.avocats);
    
  }
  deleteItem(itemId: number) {
    this.avocatService.deleteavocat(itemId)
        .subscribe(
            () => {
                console.log('Suppression réussie');
                // Mettez ici tout code à exécuter après la suppression réussie
            },
            error => {
                console.error('Erreur lors de la suppression : ', error);
                // Gérez ici l'erreur
            }
        );
}


}

