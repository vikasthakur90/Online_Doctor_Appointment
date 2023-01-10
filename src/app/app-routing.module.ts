import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePatientsComponent } from './active-patients/active-patients.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BothcardComponent } from './bothcard/bothcard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginComponent } from './login/login.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {path:"doctor-dash",component:DoctorDashboardComponent,children:[
    {path:"appointment",component:AppointmentComponent},
    {path:"activepatient",component:ActivePatientsComponent}
  ]},
  // {path:"appointment",component:AppointmentComponent,outlet:'left'},
  {path:"report/:id",component:PatientReportComponent,outlet:'left'},
  {path:"",component:HomepageComponent},
  {path:"bothcard",component:BothcardComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'login-doctor', component:LoginDoctorComponent},
  {path:'doctor-profile',component:DoctorProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
