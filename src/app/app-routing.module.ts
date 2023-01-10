import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePatientsComponent } from './active-patients/active-patients.component';
import { AppointmentBookFormComponent } from './appointment-book-form/appointment-book-form.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BothcardComponent } from './bothcard/bothcard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginComponent } from './login/login.component';
import { PatientAppointmentHistoryComponent } from './patient-appointment-history/patient-appointment-history.component';
import { PatientBookAppointmentComponent } from './patient-book-appointment/patient-book-appointment.component';
import { PatientDashComponent } from './patient-dash/patient-dash.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientReportComponent } from './patient-report/patient-report.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path: "doctor-dash", component: DoctorDashboardComponent, children: [
      { path: "appointment", component: AppointmentComponent },
      { path: "activepatient", component: ActivePatientsComponent }
    ]
  },
  {
    path: "patient-dash", component: PatientDashComponent, children: [
      { path: "bookappointment", component: PatientBookAppointmentComponent },
      { path: "patient-appointment-history", component: PatientAppointmentHistoryComponent },
      { path: 'appointment-form', component: AppointmentBookFormComponent },
      { path: 'patient-profile', component: PatientProfileComponent }

    ]
  },
  // {path:"appointment",component:AppointmentComponent,outlet:'left'},
  { path: "report/:id", component: PatientReportComponent, outlet: 'left' },
  { path: "", component: HomepageComponent },
  { path: "bothcard", component: BothcardComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: 'login-doctor', component: LoginDoctorComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
  { path: 'appointment-form', component: AppointmentBookFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
