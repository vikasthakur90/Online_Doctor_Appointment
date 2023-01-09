import { Injectable } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
import { setDoc, updateDoc } from 'firebase/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { DoctorProfileForm , EmployeeForm, PatientForm} from './model';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  url:string = "http://localhost:3000";

  // get currentUserProfile$(): Observable<DoctorForm | null>{
  //   return this.fireauth.currentUser$.pipe(
  //     switchMap(user => {

  //       if (!user.docEmail){
  //         return of(null);
  //       }
  //     })
  //   )

  // }

  constructor(private http : HttpClient,private firestore: Firestore, private fireauth: AuthService ) { }
  // Doctordata(Drdata : DoctorProfileForm){
  //   console.log(Drdata);
  //   return this.http.post<DoctorProfileForm>(this.url+"/Doctordata",Drdata);
  // }

  // Patientdata(Pdata : PatientForm){
  //   console.log(Pdata);
  //   return this.http.post<PatientForm>(this.url+"/Patientdata",Pdata);
  // }

  Saveuser(save: any){
    console.log(save);
    return this.http.post<any>(this.url+"/patient",save);
  }

  Savedoctor(savedr : any){
    console.log(savedr);
    return this.http.post<any>(this.url+"/doctor",savedr)
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