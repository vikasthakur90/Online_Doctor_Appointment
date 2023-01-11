import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivePatientsComponent } from './active-patients/active-patients.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { Note, PatientReportComponent } from './patient-report/patient-report.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './shared/footer/footer.component';
import { BothcardComponent } from './bothcard/bothcard.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import{AngularFireModule} from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BillsComponent } from './bills/bills.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DesignComponent } from './design/design.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PatientslistComponent } from './patientslist/patientslist.component';
import { AdminComponent } from './admin/admin.component';
import { PatientDashComponent } from './patient-dash/patient-dash.component';
import { PatientAppointmentHistoryComponent } from './patient-appointment-history/patient-appointment-history.component';
import { PatientBookAppointmentComponent } from './patient-book-appointment/patient-book-appointment.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientSidebarComponent } from './patient-sidebar/patient-sidebar.component';
import { AppointmentBookFormComponent } from './appointment-book-form/appointment-book-form.component';




@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ActivePatientsComponent,
    AppointmentComponent,
    PatientReportComponent,
    HomepageComponent,
    FooterComponent,
    BothcardComponent,
    LoginComponent,
    RegisterComponent,
    LoginDoctorComponent,
    DoctorProfileComponent,Note,AdminDashboardComponent,BillsComponent, DesignComponent, DoctorslistComponent,FeedbackComponent, PatientslistComponent,AdminComponent, PatientDashComponent, PatientAppointmentHistoryComponent, PatientBookAppointmentComponent, PatientProfileComponent, PatientSidebarComponent, AppointmentBookFormComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,NgbCarouselModule,NgApexchartsModule,FlexLayoutModule,
    AppRoutingModule,MaterialModule, BrowserAnimationsModule,provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),AngularFireModule.initializeApp(environment.firebase),HttpClientModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
