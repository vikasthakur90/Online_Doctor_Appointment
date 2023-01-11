import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorData } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-appointment-book-form',
  templateUrl: './appointment-book-form.component.html',
  styleUrls: ['./appointment-book-form.component.css']
})

export class AppointmentBookFormComponent {


  doctorName = sessionStorage.getItem('doctorName');
  doctorEmail = sessionStorage.getItem('doctorEmail');
  constructor(private cs: UsersService, private router: Router, private fb: FormBuilder) {
  }


  appointmentform!: FormGroup;
  emailpattern!: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!: "^[a-zA-Z ]{6,32}$";

  ngOnInit(): void {

    this.appointmentform = this.fb.group({
      patientName: new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      patientEmail: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      doa: new FormControl('', [Validators.required]),
      Disease: new FormControl('', [Validators.required]),
      docName: new FormControl('', [Validators.required]),
      docEmail: new FormControl('', [Validators.required])
    });


  }
  onSubmit() {
    console.log("called");
    console.log(this.appointmentform.value);
    if (this.appointmentform.valid) {
      this.cs.SaveAppointmentDetails(this.appointmentform.value).subscribe();
      this.router.navigate(['patient-dash']);
    }



    console.log(this.appointmentform.value);
    // this.cs.SaveAppointmentDetails(this.appointmentform.value).subscribe();
    //this.router.navigate(['patient-dash']);



  }
}

` `