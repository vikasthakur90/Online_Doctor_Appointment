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
  constructor(private cs: UsersService) { }

  ngOnInit() {
    this.cs.GetAllAppointmet().subscribe(list => {

      this.appointments = list
      console.log(this.appointments);
    });

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



