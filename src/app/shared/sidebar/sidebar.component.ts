import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { DoctorData } from 'src/app/model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  url:string = "http://localhost:3000";
  constructor(private http:HttpClient,private route:Router,private auth:AuthService) { }
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
  //  this.DocGet().subscribe(res=>{
  //   this.doc=res;
    
  //  })
  this.email = localStorage.getItem('email');
  this.http.get<any>("http://localhost:3000/doctor").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.docEmail === this.email; 
      });
      this.doc=user;
})
  }
  email!:string|null;
//   DocGet():Observable<any>{
//     this.email = localStorage.getItem('email');
//     this.http.get<any>("http://localhost:3000/doctor").subscribe(res=>{
//         const user = res.find((a:any)=>{
//           return a.docEmail === this.email; 
//         });
//   })
// }
 logout(){
 this.auth.logout();
 }
}
