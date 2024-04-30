import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { AddLocationComponent } from './add-location/add-location.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { FormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { LocationUtilisateurComponent } from './location-utilisateur/location-utilisateur.component';
import { ModalProfilComponent } from './modal-profil/modal-profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    AccueilComponent,
    AddLocationComponent,
    LocationsDetailsComponent,
    ConnexionComponent,
    CreationCompteComponent,
    LocationUtilisateurComponent,
    ModalProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
