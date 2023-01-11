import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { DoctorData, PatientData } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css']
})
export class PatientSidebarComponent {
  name?: string = '';
  image?: string = '';

  constructor(private cs: UsersService) {
  }

  loggedinuseremail = localStorage.getItem('patientEmail');
  ngOnInit() {
    this.cs.GetAllPatientData().subscribe(res => {
      let user = res.find((a: any) => {
        return a.patientEmail === this.loggedinuseremail

      });
      console.log(user);
      this.name = user?.patientName,
        this.image = user?.patientImage
      console.log(this.name);

    })
    console.log(user);

  }



}
