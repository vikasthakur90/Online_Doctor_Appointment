import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
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

  constructor(private cs: UsersService, private router: Router,private auth:AuthService) {
  }

  loggedinuseremail = localStorage.getItem('patientEmail');
  ngOnInit() {
    if (this.loggedinuseremail) {
      this.cs.GetAllPatientData().subscribe(res => {
        let user = res.find((a: any) => {
          console.log(this.loggedinuseremail)
          return a.patientEmail === this.loggedinuseremail

        });
        console.log(user);
        this.name = user?.patientName,
          this.image = user?.patientImage
        console.log(this.name);

      })
      console.log(user);


    }
    else {
      this.router.navigate['login'];
    }

  }


logout(){
  this.auth.logout();
}

}
