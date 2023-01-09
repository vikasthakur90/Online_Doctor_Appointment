import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  patientName :String ='';
  LastName : string='';

  patientEmail : string ='';
  password : string ='';

  patientPhone : string ='';

  patientAge:string='';
  patientAddress:string='';
  patientImage:string='';
constructor(private fb:FormBuilder, private auth : AuthService, private userservice : UsersService ){}
  x:number=0;
  hide = true;
  empForm!:FormGroup;
  emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  passpatern!:"^[a-zA-Z0-9]";
  // userpattern!:"^[a-zA-Z0-9]";
  namepattern!:"^[a-zA-Z][a-zA-Z ]+";
  ngOnInit(): void {
    this.empForm = this.fb.group({
      id:[''],
      patientName : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      LastName: ['',[Validators.required]],
      patientEmail : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      patientGender : ['',[Validators.required]],
      patientDob : ['',[Validators.required]],
      patientPhone : ['',[Validators.required,Validators.minLength(10)]],
      patientAge:['',[Validators.required]],
      patientAddress:['',[Validators.required]],
      patientImage:['']
      
    })
  }
  pro(){
    if(this.empForm.controls['patientName'].valid || this.empForm.controls['LastName'].valid || this.empForm.controls['patientEmail'].valid || this.empForm.controls['password'].valid || this.empForm.controls['patientDob'].valid || this.empForm.controls['patientPhone'].valid ||this.empForm.controls['patientAge'].valid||this.empForm.controls['patientAddress'].valid){
        this.x = this.x + (100/8);
    }
    else{
      
    }
  }
  // OnSubmit(){
  //   console.log(this.empForm.value);
  //   if(this.empForm.valid){
  //     this.auth.UserPost(this.empForm.value).subscribe();
  //     alert("Succesfull");
   
      
  //   }
  // }

  register() {

    if(this. patientEmail == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
//Write the code for db.json
this.userservice.Saveuser(this.empForm.value).subscribe()



    this.auth.register(this. patientEmail,this.password);
    
    this.patientEmail = '';
    this.password = '';

  }

  upload(event:Event){
    console.log(event)

}
}