import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Appointment, pappointment, PatientData } from '../model';
import { DatePipe } from '@angular/common';
import { ServiceService } from '../service.service';
import { ActivePatientsComponent } from '../active-patients/active-patients.component';
import { PatientReportComponent } from '../patient-report/patient-report.component';
import { Route, Router, RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  currentDate = new Date().toLocaleDateString();
  list:Appointment[] = [];
  url:string = "http://localhost:3000";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['doa', 'patientName', 'patientEmail', 'patientPhone', 'patientGender', 'patientAddress','patientAge', 'report'];
  dataSource:any;
  patient:PatientData[] = [];
  docE = sessionStorage.getItem('email');
  constructor(private http:HttpClient,private cs:ServiceService,private router:Router,private matDialog:MatDialog){}
  ngOnInit():void{
    
    this.appointmentGet().subscribe(list=>{
      this.list = list.filter((a:any)=>{
       return a.doa === this.currentDate && a.docEmail === this.docE;
      });
    
      this.dataSource = new MatTableDataSource<Appointment>(this.list);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })}
  appointmentGet():Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.url + "/patientAppoint");
  }


  FilterChange(event:Event){
  const filvalue =(event.target as HTMLInputElement).value;
  this.dataSource.filter=filvalue;
  }
  
  report(p:pappointment){
  //this.cs.sendClickEvent(p);
  console.log(p.id);
  this.router.navigate(['doctor-dash/report/'+p.id]);
   }
 
}
