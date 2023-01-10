import { EventEmitter, Injectable } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { setDoc, updateDoc } from 'firebase/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { Appointment, DoctorData, DoctorProfileForm, EmployeeForm, PatientData, PatientForm } from './model';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class UsersService {
  url: string = "http://localhost:3000";

  // get currentUserProfile$(): Observable<DoctorForm | null>{
  //   return this.fireauth.currentUser$.pipe(
  //     switchMap(user => {

  //       if (!user.docEmail){
  //         return of(null);
  //       }
  //     })
  //   )

  // }

  constructor(private http: HttpClient, private firestore: Firestore, private fireauth: AuthService) { }
  // Doctordata(Drdata : DoctorProfileForm){
  //   console.log(Drdata);
  //   return this.http.post<DoctorProfileForm>(this.url+"/Doctordata",Drdata);
  // }

  // Patientdata(Pdata : PatientForm){
  //   console.log(Pdata);
  //   return this.http.post<PatientForm>(this.url+"/Patientdata",Pdata);
  // }
  event = new EventEmitter<DoctorData>();
  setEvent(setDoc: DoctorData) {
    this.event.emit(setDoc);
    sessionStorage.setItem('doctorEmail', setDoc.docEmail);
    sessionStorage.setItem('doctorName', setDoc.docName);

  }

  Saveuser(save: any) {
    console.log(save);
    return this.http.post<any>(this.url + "/patient", save);
  }
  SaveAppointmentDetails(save: any) {
    console.log(save)
    return this.http.post<any>(this.url + "/patientAppoint", save)
  }
  Savedoctor(savedr: any) {
    console.log(savedr);
    return this.http.post<any>(this.url + "/doctor", savedr)
  }
  GetAllDoctorData(): Observable<DoctorData[]> {
    return this.http.get<DoctorData[]>(this.url + "/doctor");
  }
  GetAllPatientData(): Observable<PatientData[]> {
    return this.http.get<PatientData[]>(this.url + "/patient");
  }
  GetPatientDataById(id: number): Observable<PatientData> {
    return this.http.get<PatientData>(this.url + "/patient/" + id);
  }
  GetAllAppointmet(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url + "/patientAppoint");
  }
  GetAllAppointmetByEmail(patientEmail: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url + "/patientAppoint");
  }




  // addUser(user : DoctorForm) :Observable<any>{
  //   const ref = doc(this.firestore,'users', user.docEmail)
  //   return from (setDoc(ref,user));
  // }

  // updateUser(user : DoctorForm) :Observable<any>{
  //   const ref = doc(this.firestore,'users', user.docEmail)
  //   return from (updateDoc(ref,{...user}));
  // }
}