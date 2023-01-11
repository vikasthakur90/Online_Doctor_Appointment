import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatientData, DoctorData, BillDetails } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:3000";
  

   getPatients():Observable<PatientData[]>{
    return this.http.get<PatientData[]>(this.url+"/patient");
   }
   deletePatient(id:number){
    return this.http.delete<PatientData>(this.url+"/patient/"+id);
   }
   getDoctors(){
    return this.http.get<DoctorData[]>(this.url + "/doctor");
   }
   deleteDoctor(id:number){
    return this.http.delete<PatientData>(this.url+"/doctor/"+id);
   }
   getBills(){
    return this.http.get<BillDetails[]>(this.url + "/bill");
   }
   deleteBill(id:number){
    return this.http.delete<PatientData>(this.url+"/bill/"+id);
   }
}
