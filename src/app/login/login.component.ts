import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password :new FormControl('',[Validators.required]),
    
  });
  
  email : string ='';
  password : string ='';
constructor(private auth : AuthService, private router :Router){}

hide=true;
  ngOnInit(): void {}

  
  login() {

    if(this.email == ''){
    alert('please enter email');
    return;
    }
    if(this.password ==''){
      alert('Please Enter Password');
      return;
    }
    if(this.email == 'Admin@yash.com' && this.password == 'Admin@123'){
      this.router.navigate(['admin/admin-dashboard']);
    }
else{
    this.auth.PatientLogin(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  }
  
    signInWithGoogle() {
      this.auth.googleSignIn();
    }
  



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
   }