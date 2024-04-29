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
import { AvocatComponent } from './avocat/avocat.component';
import { AvocatDetailsComponent } from './avocat-details/avocat-details.component';
import { ProtectionComponent } from './protection/protection.component';
import { ProtectionDetailsComponent } from './protection-details/protection-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    AccueilComponent,
    AddLocationComponent,
    LocationsDetailsComponent,
    ConnexionComponent,
    CreationCompteComponent,
    AvocatComponent,
    AvocatDetailsComponent,
    ProtectionComponent,
    ProtectionDetailsComponent
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
