import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

   docName :String ='';
  docEmail : string ='';
  docPassword : string ='';
   docGender:string='';
    docDob:string='';
    specialization:string='';
    docPhone: string ='';
    docAddress:string='';
    docImage:string='';

    constructor(private auth :AuthService, private users : UsersService, private fb: FormBuilder){}
    x:number=0;
    hide=true;

    DoctorDetails! : FormGroup;


    ngOnInit(): void {
      this.DoctorDetails = this.fb.group({
       docName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
       docEmail:['',[Validators.required,Validators.email]],
       docPassword : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
       docGender:[''],
       docDob:[''],
       specialization:['',[Validators.required]],
       docPhone:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
       docAddress:['',[Validators.required]],
       docImage:['']

      })
     
    }

    pro(){
          if(this.DoctorDetails.controls['docName'].valid || this.DoctorDetails.controls['docEmail'].valid || this.DoctorDetails.controls['docPassword'].valid || this.DoctorDetails.controls[' docDob'].valid || this.DoctorDetails.controls['specialization'].valid || this.DoctorDetails.controls['docPhone'].valid|| this.DoctorDetails.controls['docAddress'].valid){
              this.x = this.x + (100/7);
          }
          else{
       
          }
        }


     DoctorRegister(){

      if(this.docEmail == '') {
        alert('Please enter email');
        return;
      }

      if(this.docPassword == '') {
        alert('Please enter password');
        return;
             
     }
     
     //Write the code for db.json
this.users.Savedoctor(this.DoctorDetails.value).subscribe();


     this.auth.Doctorreg(this.docEmail,this.docPassword);
    
     this.docEmail = '';
     this.docPassword = '';
   }

   upload(event:Event){
    console.log(event)
 }
  }


//    processFile(imageInput: any) {
//     const file: File = imageInput.files[0];
//     const reader = new FileReader();

//     reader.addEventListener('load', (event: any) => {

//       this.selectedFile = new ImageSnippet(event.target.result, file);

//       this.imageService.uploadImage(this.selectedFile.file).subscribe(
//         (res) => {
        
//         },
//         (err) => {
        
//         })
//     });

//     reader.readAsDataURL(file);
//   }
// }

  
  // constructor(private us :UsersService, private fb : FormBuilder,private auth : AuthService){}
  // Doctordetails!:FormGroup
  // x:number=0;
  // hide = true;

  // emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  // passpatern!:"^[a-zA-Z0-9]";
  // // userpattern!:"^[a-zA-Z0-9]";
  // namepattern!:"^[a-zA-Z][a-zA-Z ]+";
  // ngOnInit(): void {
  //  this.Doctordetails = this.fb.group({
    
  //    docName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
  //     docEmail:['',[Validators.required,Validators.email,Validators.pattern(this.emailpattern)]],
  //     docPassword : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
    
  //      docGender:[''],
  //     docDob:[''],
  //     specialization:['',[Validators.required]],
  //     docPhone:['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      
  //     docAddress:['',[Validators.required]],
   
  //  })
  // }

  // pro(){
  //   if(this.Doctordetails.controls['docName'].valid || this.Doctordetails.controls['docEmail'].valid || this.Doctordetails.controls['docPassword'].valid || this.Doctordetails.controls['docDob'].valid || this.Doctordetails.controls['docPhone'].valid || this.Doctordetails.controls['specialization'].valid || this.Doctordetails.controls['docAddress'].valid){
  //       this.x = this.x + (100/7);
  //   }
  //   else{
      
  //   }
  // }

  // Doctorregister() {

  //   if(this.docEmail == '') {
  //     alert('Please enter email');
  //     return;
  //   }

  //   if(this.docPassword == '') {
  //     alert('Please enter password');
  //     return;
  //   }
//Write the code for db.json
// this.us.Savedoctor(this.Doctordetails.value).subscribe()



//     this.auth.register(this.docEmail,this.docPassword);
    
//     this.email = '';
//     this.password = '';

//   }

//   Doctorreg() {

//         if(this.docEmail == '') {
//           alert('Please enter email');
//           return;
//         }
//         if(this.docPassword == '') {
//           alert('Please enter password');
//           return;
//         }

//         this.auth.register(this.docEmail,this.docPassword);
    
//         this.docEmail = '';
//         this.docPassword = '';
    
//       }

//   saveProfile(){
//     console.log(this.Doctordetails.value);
//     if(this.Doctordetails.valid){
//       this.us.Doctordata(this.Doctordetails.value).subscribe();
//       alert("Succesfull");
//     }
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { AuthService } from '../shared/auth.service';
// import { UsersService } from '../users.service';


// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit{

//   FirstName :String ='';
//   LastName : string='';

//   email : string ='';
//   password : string ='';

//   mob : string ='';







//   constructor(private fb:FormBuilder, private auth : AuthService, private userservice : UsersService ){}
//   x:number=0;
//   hide = true;
//   empForm!:FormGroup;
//   emailpattern!:"^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
//   passpatern!:"^[a-zA-Z0-9]";
  
//   namepattern!:"^[a-zA-Z][a-zA-Z ]+";
// ngOnInit(): void {
//   this.empForm = this.fb.group({
//     id:[''],
//     FirstName : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern(this.namepattern)]],
//     LastName: ['',[Validators.required,Validators.pattern(this.namepattern)]],
//     email : ['',[Validators.required,Validators.email]],
//     password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern(this.passpatern)]],
//     gender : ['',[Validators.required]],
//     dob : ['',[Validators.required]],
//     mob : ['',[Validators.required,Validators.minLength(10)]]//  
//   })
// }
//   pro(){
//     if(this.empForm.controls['FirstName'].valid || this.empForm.controls['LastName'].valid || this.empForm.controls['email'].valid || this.empForm.controls['password'].valid || this.empForm.controls['dob'].valid || this.empForm.controls['mob'].valid){
//         this.x = this.x + (100/7);
//     }
//     else{
      
//     }
//   }
  

//   register() {

//     if(this.email == '') {
//       alert('Please enter email');
//       return;
//     }

//     if(this.password == '') {
//       alert('Please enter password');
//       return;
//     }
//Write the code for db.json
// this.userservice.Saveuser(this.empForm.value).subscribe();



//     this.auth.register(this.email,this.password);
    
//     this.email = '';
//     this.password = '';

//   }
