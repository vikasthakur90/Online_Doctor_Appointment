import { Component } from '@angular/core';
import { DoctorData } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrls: ['./patient-dash.component.css']
})
export class PatientDashComponent {
  doctors !: DoctorData[];
  constructor(private cs: UsersService) { }
  ngOnInit() {
    this.cs.GetAllDoctorData().subscribe(list => {

      this.doctors = list
    });

  }
  getId(u: DoctorData) {
    this.cs.setEvent(u);
    console.log(u);

  }
}
