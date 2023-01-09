import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorData } from 'src/app/model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  url:string = "http://localhost:3000";
  constructor(private http:HttpClient,private route:Router) { }
  doc:DoctorData={
    id: 0,
    docName: '',
    docEmail: '',
    docGender: '',
    docDob: '',
    specialization: '',
    docPhone: '',
    docAddress: '',
    docImage: ''
  };
  ngOnInit() {
   this.DocGet().subscribe(res=>{
    this.doc=res;
    
   })
  }
  DocGet():Observable<DoctorData>{
    return this.http.get<DoctorData>(this.url + "/doctor/1");
  }

}
