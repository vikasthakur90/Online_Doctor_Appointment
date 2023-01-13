import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorData } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-patient-book-appointment',
  templateUrl: './patient-book-appointment.component.html',
  styleUrls: ['./patient-book-appointment.component.css']
})
export class PatientBookAppointmentComponent {
  doctors !: DoctorData[];
  appointmentform!: FormGroup;
  constructor(private cs: UsersService, private router: Router) {
  }


  ngOnInit() {
    this.cs.GetAllDoctorData().subscribe(list => {

      this.doctors = list

    });

  }
  getId(u: DoctorData) {
    this.cs.setEvent(u);
    this.router.navigate(['patient-dash/appointment-form'])
    console.log(u);

  }




}






