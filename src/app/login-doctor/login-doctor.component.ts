import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-doctor',
  templateUrl: './login-doctor.component.html',
  styleUrls: ['./login-doctor.component.css']
})
export class LoginDoctorComponent implements OnInit{
     loginformdr = new FormGroup({
   docEmail: new FormControl('',[Validators.required, Validators.email]),
   docPassword :new FormControl('',[Validators.required]),
  
  });

  docEmail : string ='';
  docPassword : string ='';

  constructor(private auth : AuthService, private router :Router){}
  hide=true;

email = localStorage.getItem('email');
password = localStorage.getItem('password');
  ngOnInit(): void {
if(this.email != null && this.password != null){
  this.auth.logindr(this.email,this.password);
}
  }

 logindr() {

     if(this.docEmail == ''){
     alert('please enter email');
     return;
     }
     if(this.docPassword ==''){
       alert('Please Enter Password');
       return;
     }
 else{
     this.auth.logindr(this.docEmail, this.docPassword);
     this.docEmail= '';
     this.docPassword = '';
   }
   }
  
    signInWithGoogledr() {
      this.auth.googleSignIn();
    }

  
  


}


// import { Component,OnInit } from '@angular/core';
// import { FormControl, FormGroup,Validators } from '@angular/forms';
// import { AuthService } from '../shared/auth.service';
// import { NgModel } from '@angular/forms';
// import { Router } from '@angular/router';




// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm = new FormGroup({
//     email: new FormControl('',[Validators.required, Validators.email]),
//     password :new FormControl('',[Validators.required]),
    
//   });
  
//   email : string ='';
//   password : string ='';
// constructor(private auth : AuthService, private router :Router){}

// hide=true;
//   ngOnInit(): void {}

  
//   login() {

//     if(this.email == ''){
//     alert('please enter email');
//     return;
//     }
//     if(this.password ==''){
//       alert('Please Enter Password');
//       return;
//     }
// else{
//     this.auth.login(this.email, this.password);
//     this.email = ' ';
//     this.password = ' ';
//   }
//   }
  
//     signInWithGoogle() {
//       this.auth.googleSignIn();
//     }
  



    // get email(){
  //   return this.loginForm.get('email');
  // }
  // get password(){
  //   return this.loginForm.get('password');
  // }

  // Submit(){
  //   if (this.loginForm.valid){
  //     return;
  //   }
  //   const{email, password} =this.loginForm.value;
  //   this.authservice.login(email, password).subscribe(() => {
  //       this.router.navigate(['/dashboard']);

  //   })
  // }
   //}