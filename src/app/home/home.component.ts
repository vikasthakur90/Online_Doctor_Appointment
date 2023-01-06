import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  id = 1;
  name = "Dr. Aditi Jain";
  specialization = "gynecologist";
  Email = "aditi435jain@gmail.com";
  sex = "Female";
  DOB = "9/1/2000";
  MobileNo = "9131456789";
  Address = "Indore";
  profilePic = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";


}
