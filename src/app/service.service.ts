import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, Subject } from 'rxjs';
import { Appointment, DoctorData, pappointment, PatientData, prescription } from './model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url:string = "http://localhost:3000";

  
  constructor(private http:HttpClient,private router:Router) { }
  
  getReport(id:any):Observable<Appointment>
  {
    return this.http.get<Appointment>(this.url + "/patientAppoint/" + id);
  }
 getPrescription(email:string):Observable<prescription[]>{
  return this.http.get<prescription[]>(this.url + "/prescription")
 }
 EmpEdit(emp:DoctorData,id:number){
  console.log(id);
   return this.http.put<DoctorData>(this.url+"/doctor/"+id,emp);
}
}
