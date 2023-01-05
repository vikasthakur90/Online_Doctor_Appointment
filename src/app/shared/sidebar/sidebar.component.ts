import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorData } from 'src/app/model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  url:string = "http://localhost:3000";
  constructor(private http:HttpClient) { }
  doc!:DoctorData;
  ngOnInit() {
   this.DocGet().subscribe(res=>{
    this.doc=res;
    console.log(this.doc);
   })
  }
  DocGet():Observable<DoctorData>{
    return this.http.get<DoctorData>(this.url + "/doctor/1");
  }
 
}
