import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BillDetails } from '../models/BillData';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  public displayedColumns = ['id', 'patientName','amount'];
  public dataSource=new MatTableDataSource<BillDetails>();
  constructor(private router:Router,private service:UserServiceService){}
  ngOnInit(){
    this.getAllBills();
  }
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource();
    this.getAllBills();
    this.dataSource.paginator = this.paginator;
}
  backToDashboard(){
    this.router.navigate(['/admin-dashboard']);
  }
  getAllBills(){
    this.service.getBills().subscribe(list=>
      {this.dataSource.data=list})
  }
}
