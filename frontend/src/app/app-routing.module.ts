import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { ModalProfilComponent } from './modal-profil/modal-profil.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'location', component:LocationComponent},
  {path:'add',component:AddLocationComponent},
  {path:'detail/:id',component:LocationsDetailsComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'creationCompte',component:CreationCompteComponent},
  {path:'profil',component:ModalProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
