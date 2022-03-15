import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisListComponent } from './regis-list/regis-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { VaccineComponent } from './vaccine/vaccine.component';


const routes: Routes = [
  {
    path: 'register', component: RegistrationComponent,
  },
  {
    path: 'my-registrations', component: RegisListComponent
  },
  {
    path: 'vaccin', component: VaccineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
