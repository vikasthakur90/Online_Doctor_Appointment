import { Component } from '@angular/core';
import { PatientData } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent {
  profile!: PatientData;
  pId?: number = 0;
  pName?: string;
  pEmail?: string;
  pSex?: string;
  pDob?: string;
  pAddres?: string;
  pAge?: number;
  pMobile?: string;

  loggedpatient = localStorage.getItem('patientEmail');
  constructor(private cs: UsersService) {
    this.cs.GetAllPatientData().subscribe(res => {
      const user = res.find((a: PatientData) => {
        return a.patientEmail === this.loggedpatient
      });
      this.pId = user?.id;
      this.pEmail = user?.patientEmail;
      this.pName = user?.patientName;
      this.pSex = user?.patientGender;
      this.pDob = user?.patientDob;
      this.pAddres = user?.patientAddress;
      this.pMobile = user?.patientPhone;
      this.pAge = user?.patientAge;

    })

  }
}
