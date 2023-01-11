import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Router} from '@angular/router';
import { PatientData } from '../models/PatientData';
import { UserServiceService } from '../user-service.service';
import {FormControl,FormGroup} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patientslist.component.html',
  styleUrls: ['./patientslist.component.css']
})
export class PatientslistComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  userId:number;
  public displayedColumns = ['id', 'patientName', 'patientEmail', 'patientPhone', 'patientAddress', 'patientDob', 'patientGender','patientAge', 'patientImage','delete'];  
  public dataSource=new MatTableDataSource<PatientData>();
  constructor(private router: Router,private service:UserServiceService){}
  ngOnInit(){
    this.getAllPatientss();
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource();
    this.getAllPatientss();
    this.dataSource.paginator = this.paginator;
}
  backToDashboard(){
    this.router.navigate(['/admin-dashboard']);
  }
  deletePatient(id:any){
    this.dataSource.data.filter(element=>element.id==this.userId);
    this.service.deletePatient(id).subscribe();
    location.reload();
  }
  getAllPatientss(){
    this.service.getPatients().subscribe(list=>
      {this.dataSource.data=list}
      )
  }
}