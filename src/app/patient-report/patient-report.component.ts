import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentComponent } from '../appointment/appointment.component';
import { pappointment, PatientData, prescription } from '../model';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
  patientName!:string;
  patient:pappointment={
    id: 0,
    doa: '',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientAddress: '',
    patientDob: '',
    patientGender: '',
    patientAge: 0,
    patientImage: ''
  }; 

  constructor(private http:HttpClient,private cs:ServiceService,public dialog: MatDialog,private route:ActivatedRoute){ }
  
  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.cs.getReport(id).subscribe(re=>{
      this.patient=re;
   console.log(this.patient);
  });
  }

  
  openDialog() {
    
    this.dialog.open(Prescription,{
      height:'450px',
      width:'500px'
    });

   }
  checked(){

  }}

  @Component({

    selector: 'Prescription',
  
    templateUrl: './dialog.html',
  
  })
  
  export class Prescription {
  
    constructor(public dialog: MatDialog,private http:HttpClient) {}
    dclose(){
      this.dialog.closeAll();
    }
    prescription!:prescription;
    savePrescription(){
     this.http.post("http://localhost:3000/prescription",this.prescription);
    }
  }