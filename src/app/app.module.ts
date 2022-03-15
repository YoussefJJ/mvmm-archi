import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisListComponent } from './regis-list/regis-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccineComponent,
    RegistrationComponent,
    RegisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
