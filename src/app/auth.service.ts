import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth'
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EmployeeForm } from './model';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import {Auth, signInWithEmailAndPassword} from '@angular/fire/auth'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url:string = "http://localhost:3000";
  currentUser$: any;
  

  constructor(private fireauth : AngularFireAuth, private router :Router, public http:HttpClient) { }

//   login(email : string, password:string){
//     return from(signInWithEmailAndPassword(this.auth, email, password));
//   }
//  logout(){
//    return from(this.auth.signOut());
//  }

  

  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      localStorage.setItem('email',email);
      sessionStorage.setItem('email',email);
      
      sessionStorage.setItem('password',password);
      this.router.navigate(['doctor-dash']);

    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    } 
    )
  }

  PatientLogin(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      localStorage.setItem('patientEmail',email)
      sessionStorage.setItem('patientEmail', email);
      sessionStorage.setItem('pemail', email);
      sessionStorage.setItem('email',email);
      this.router.navigate(['/patient-dash']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    }
    )
  }

  //register 
  register( patientEmail : string, password: string) {
    this.fireauth.createUserWithEmailAndPassword( patientEmail, password).then( () => {
      alert('Registeration Successfull');
      this.router.navigate(['/login']);

    },
    err => {
      alert(err.message);
      this.router.navigate(['/register']);
    }
    )
  }

  //logout method
  logout(){
    this.fireauth.signOut().then( () => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('password');
      localStorage.removeItem('email');
      sessionStorage.removeItem('email');
      localStorage.removeItem('patientEmail');
      sessionStorage.removeItem('pemail')
      sessionStorage.removeItem('patientEmail');
      console.log("logout");
      this.router.navigate(['/bothcard']);

    }, err => {
      alert(err.message)
    }
    )
  }

  UserPost(emp:EmployeeForm){
    console.log(emp);
   return this.http.post<EmployeeForm>(this.url+"/getAlldata",emp);
  }

  // forgot password
  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email']);
    }, err => {
      alert('Something went wrong');
    })
}


googleSignIn() {
  return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

    this.router.navigate(['/dashboard']);
    localStorage.setItem('token',JSON.stringify(res.user?.uid));

  }, err => {
    alert(err.message);
  })
}


Doctorreg(docEmail : string, docPassword: string) {
  this.fireauth.createUserWithEmailAndPassword(docEmail, docPassword).then( () => {
    alert('Registeration Successfull');
    this.router.navigate(['/login-doctor']);

  },
  err => {
    alert(err.message);
    this.router.navigate(['/doctor-profile']);
  }
  )
}


logindr(docEmail : string, docPassword : string){
  this.fireauth.signInWithEmailAndPassword(docEmail,docPassword).then( () => {
    localStorage.setItem('token','true');
    localStorage.setItem('email',docEmail);
    sessionStorage.setItem('email',docEmail);
    this.router.navigate(['doctor-dash']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/login-doctor']);
  } 
  )
}
}



