import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoctorData } from '../model';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.css']
})
export class DoctorslistComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  userId:number;
  public displayedColumns = ['id', 'docName', 'docEmail', 'docGender','docDob','specialization','docPhone', 'docAddress', 'docImage','delete'];
  public dataSource=new MatTableDataSource<DoctorData>();
  constructor(private router:Router,private service:UserServiceService){}
  ngOnInit(){
    this.getAllDoctors();
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource();
    this.getAllDoctors();
    this.dataSource.paginator = this.paginator;
}
  backToDashboard(){
    this.router.navigate(['/admin/admin-dashboard']);
  }
  getAllDoctors(){
    this.service.getDoctors().subscribe(list=>
      {this.dataSource.data=list
      console.log(list);
      })
  }
  deleteDoctor(id:any){
    this.dataSource.data.filter(element=>element.id==this.userId);
    this.service.deleteDoctor(id).subscribe();
    location.reload();
  }
}
