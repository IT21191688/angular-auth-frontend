import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { DoctorVerificationComponent } from './components/doctor-verification/doctor-verification.component';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorVerificationComponent,
    AllDoctorsComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
