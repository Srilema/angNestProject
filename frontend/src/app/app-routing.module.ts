import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddLocationComponent } from './add-location/add-location.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'location', component:LocationComponent},
  {path:'add',component:AddLocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
