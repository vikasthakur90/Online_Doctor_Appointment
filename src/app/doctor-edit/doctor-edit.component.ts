import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DoctorData } from '../model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit{
  DoctorDetails!:FormGroup;
  doc!:DoctorData;
  constructor( public http:HttpClient,private cs:ServiceService){}
  ngOnInit(): void {
    
    let email = localStorage.getItem('email');
    this.http.get<any>("http://localhost:3000/doctor").subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.docEmail === email; 
        });
        this.doc=user;
        this.DoctorDetails = new FormGroup({
          docName:new FormControl(this.doc.docName),
          docEmail:new FormControl(this.doc.docEmail),
          
          docGender:new FormControl(this.doc.docGender),
          docDob:new FormControl(this.doc.docDob),
          specialization:new FormControl(this.doc.specialization),
          docPhone:new FormControl(this.doc.docPhone),
          docAddress:new FormControl(this.doc.docAddress),
          docImage:new FormControl(this.doc.docImage),
        })
        console.log(this.doc.docName);
  })
  }
  DoctorRegister(){
    this.cs.EmpEdit(this.DoctorDetails.value,this.doc.id).subscribe();
  }

 

}
