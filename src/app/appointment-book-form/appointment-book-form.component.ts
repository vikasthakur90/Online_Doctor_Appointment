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
    document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/02/60/79/68/360_F_260796882_QyjDubhDDk0RZXV9z7XBEw9AKnWCizXy.jpg')"
  }


  appointmentform!: FormGroup;
  emailpattern!: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!: "^[a-zA-Z ]{5,32}$";

  ngOnInit(): void {

    this.appointmentform = this.fb.group({
      patientName: new FormControl('', [Validators.required, Validators.pattern(this.namepattern)]),
      patientEmail: new FormControl('', [Validators.required, Validators.pattern(this.emailpattern)]),
      doa: new FormControl('', [Validators.required]),
      Disease: new FormControl('', [Validators.required]),
      docName: new FormControl('', [Validators.required]),
      docEmail: new FormControl('', [Validators.required]),
      patientPhone:new FormControl('', [Validators.required]),
      patientAge:new FormControl('', [Validators.required]),
      patientDob:new FormControl(''),
      patientGender:new FormControl(''),
      
      patientAddress:new FormControl('')

    });


  }
  public myError = (controlName: string, errorName: string) => {
    return this.appointmentform.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    console.log("called");
    this.appointmentform.value['doa'] = this.appointmentform.value['doa'].toLocaleDateString();
    console.log(this.appointmentform.value);
    if (this.appointmentform.valid) {
      this.cs.SaveAppointmentDetails(this.appointmentform.value).subscribe();
      this.router.navigate(['patient-dash/bill']);
    }



    console.log(this.appointmentform.value);
    // this.cs.SaveAppointmentDetails(this.appointmentform.value).subscribe();
    //this.router.navigate(['patient-dash']);



  }
}

` `