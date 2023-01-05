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
@NgModule({
  declarations: [
    AppComponent,
    DoctorDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    ActivePatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MaterialModule, BrowserAnimationsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
