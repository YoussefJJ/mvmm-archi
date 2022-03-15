import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisListComponent } from './regis-list/regis-list.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: 'register', component: RegistrationComponent,
  },
  {
    path: 'my-registrations', component: RegisListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
