import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineDoctorAppointment';
  email = sessionStorage.getItem('email');
 
  constructor(){
    this.email = sessionStorage.getItem('email');
    console.log(this.email);
  }
}
