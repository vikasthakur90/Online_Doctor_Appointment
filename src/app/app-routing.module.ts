import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivePatientsComponent } from './active-patients/active-patients.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AppointmentBookFormComponent } from './appointment-book-form/appointment-book-form.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BillingComponent } from './billing/billing.component';
import { BillsComponent } from './bills/bills.component';
import { BothcardComponent } from './bothcard/bothcard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginComponent } from './login/login.component';
import { PatientAppointmentHistoryComponent } from './patient-appointment-history/patient-appointment-history.component';
import { PatientBookAppointmentComponent } from './patient-book-appointment/patient-book-appointment.component';
import { PatientDashComponent } from './patient-dash/patient-dash.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { PayComponent } from './pay/pay.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {path:"doctor-dash",component:DoctorDashboardComponent,children:[
    { path: "", component: AppointmentComponent },
    {path:"appointment",component:AppointmentComponent},
    {path:"activepatient",component:ActivePatientsComponent},
    {path:"report/:id",component:PatientReportComponent},
    {path:"doctorEdit",component:DoctorEditComponent}
  ]},
  
  {
    path: "patient-dash", component: PatientDashComponent, children: [
      { path: "", component: PatientBookAppointmentComponent },
      { path: "bookappointment", component: PatientBookAppointmentComponent },
      { path: "patient-appointment-history", component: PatientAppointmentHistoryComponent },
      { path: 'appointment-form', component: AppointmentBookFormComponent },
      { path: 'patient-profile', component: PatientProfileComponent },
      {path:"bill",component:BillingComponent},
      {path:"pay",component:PayComponent}
    ]
  },
  // {path:"report/:id",component:PatientReportComponent},
  {path:"",component:HomepageComponent},
  {path:"bothcard",component:BothcardComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:'login-doctor', component:LoginDoctorComponent},
  { path: 'appointment-form', component: AppointmentBookFormComponent },
  {path:'doctor-profile',component:DoctorProfileComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'admin-dashboard', component:AdminDashboardComponent},
    {path:'doctors', component:DoctorslistComponent},
    {path:'patients', component:PatientslistComponent},
    {path:'bills', component:BillsComponent}
  ]},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
