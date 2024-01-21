import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminVerificationComponent } from './components/admin-verification/admin-verification.component';
import { NewDoctorComponent } from './components/new-doctor/new-doctor.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminVerificationComponent,
    NewDoctorComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
