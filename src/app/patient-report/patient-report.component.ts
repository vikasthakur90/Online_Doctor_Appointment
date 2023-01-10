import { HttpClient } from '@angular/common/http';
import { Component,Inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppointmentComponent } from '../appointment/appointment.component';
import { pappointment, PatientData, prescription } from '../model';
import { ServiceService } from '../service.service';

export interface DialogData {
  
  patientEmail: string;
}
export interface NoteData {
  note:string;
  patientEmail: string;
}
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
   note1!:string;
   note(){
    const dialogRef = this.dialog.open(Note,{
      data: {patientEmail: this.patient.patientEmail},
    },);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.note1 = result;
    });
  }
   
  checked(){

  }}

  @Component({

    selector: 'Prescription',
  
    templateUrl: './dialog.html',
  
  })
  
  export class Prescription {
  
    constructor(public dialog: MatDialog,private http:HttpClient,public dialogRef: MatDialogRef<Note>) {}
    dclose(){
      this.dialog.closeAll();
    }
    prescription!:prescription;
    savePrescription(){
     this.http.post("http://localhost:3000/prescription",this.prescription);
    }
  }
  
  @Component({
    
    selector: 'Note',
  
    templateUrl: './note.html',
  
  })
  
  export class Note {
    constructor(
      public dialogRef: MatDialogRef<Note>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData,private http:HttpClient
    ) {}
   note1!:NoteData;
    onNoClick(): void {
      this.dialogRef.close();
      
    }
    
    submit(){
      this.note1.patientEmail=this.data.patientEmail;
      this.http.post<NoteData>("http://localhost:3000/note",this.note1).subscribe();
    }
   
  }