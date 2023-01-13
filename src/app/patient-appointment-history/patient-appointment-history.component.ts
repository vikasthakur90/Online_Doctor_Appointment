import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment, PatientData } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-patient-appointment-history',
  templateUrl: './patient-appointment-history.component.html',
  styleUrls: ['./patient-appointment-history.component.css']
})
export class PatientAppointmentHistoryComponent {

  appointments !: Appointment[];
  constructor(private cs: UsersService) {
    this.cs.GetAllAppointmet().subscribe(list => {
      console.log(list);
      let patientEmail = localStorage.getItem('patientEmail');
      list = list.filter(lst => lst.patientEmail == patientEmail)
      console.log(list);
      this.appointments = list
    });
  }

  ngOnInit() {

    this.cs.GetAllPrescription().subscribe(prescription => {
      let patientEmail = localStorage.getItem('patientEmail');
      prescription = prescription.filter(lst => lst.patientEmail == patientEmail)
      console.log(this.appointments)
      console.log(prescription);
      this.appointments = this.appointments.map((appointment, index) => { appointment.prescription = prescription[index].medicine; return appointment })
    })
  }
}
   /* this.cs.GetAllAppointmetByEmail(loggeduser).subscribe();
this.cs.GetAllAppointmet().subscribe(res => {
const user = res.find((a: Appointment) => {
return a.patientEmail === loggeduser
});
console.log(user);
//this.appointments = user
//console.log(this.appointments);
});*/



