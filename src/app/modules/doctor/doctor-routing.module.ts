import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';
import { AllDoctorsComponent } from './components/all-doctors/all-doctors.component';
import { DoctorVerificationComponent } from './components/doctor-verification/doctor-verification.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    children: [
      { path: 'doctor-verification', component: DoctorVerificationComponent },
      { path: 'all-doctors', component: AllDoctorsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
