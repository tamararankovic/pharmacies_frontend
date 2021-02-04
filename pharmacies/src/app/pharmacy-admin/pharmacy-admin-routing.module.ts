import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from '../shared/helpers/route-guard.service';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { AdminBasicInfoComponent } from './admin-basic-info/admin-basic-info.component';
import { DermatologistsComponent } from './dermatologists/dermatologists.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewDermatologistComponent } from './new-dermatologist/new-dermatologist.component';
import { NewPharmacistComponent } from './new-pharmacist/new-pharmacist.component';
import { PharmacistsComponent } from './pharmacists/pharmacists.component';
import { PharmacyBasicInfoComponent } from './pharmacy-basic-info/pharmacy-basic-info.component';

const routes: Routes = [
  {path: 'basic-info', component: AdminBasicInfoComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'pharmacy-basic-info', component: PharmacyBasicInfoComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'new-pharmacist', component: NewPharmacistComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'new-dermatologist', component: NewDermatologistComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'dermatologists', component: DermatologistsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: 'pharmacists', component: PharmacistsComponent, canActivate: [RouteGuardService], data: { expectedRoles : ["PHARMACY_ADMIN"]}},
  {path: '', component: HomePageComponent, canActivate: [RouteGuardService], data: { expectedRoles: ["PHARMACY_ADMIN"]}},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyAdminRoutingModule { }
