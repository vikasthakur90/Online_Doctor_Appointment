import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { pappointment, PatientData } from '../model';

@Component({
  selector: 'app-active-patients',
  templateUrl: './active-patients.component.html',
  styleUrls: ['./active-patients.component.css']
})
export class ActivePatientsComponent 
{
  url:string = "http://localhost:3000";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['id', 'patientName', 'patientEmail', 'patientPhone', 'patientGender', 'patientAddress','patientAge', 'report'];
  dataSource:any;
  patient:PatientData[] = [];
  router: any;
  constructor(private http:HttpClient){}
  ngOnInit():void{
    let email = localStorage.getItem('email');
    this.PatientGet().subscribe(list=>{
    //  this.patient = list;
      this.patient = list.filter((a:any)=>{
        return a.docEmail === email;
       });
      this.dataSource = new MatTableDataSource<PatientData>(this.patient);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    })
    
  }
  PatientGet():Observable<PatientData[]>{
    return this.http.get<PatientData[]>(this.url + "/patientHistory");
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


