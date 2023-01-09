import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subject } from 'rxjs';
import { pappointment, PatientData } from './model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:string = "http://localhost:3000";

  
  constructor(private http:HttpClient,private router:Router) { }
  
  getReport(id:any):Observable<pappointment>
  {
    return this.http.get<pappointment>(this.url + "/appointment/" + id);
  }
 
}
