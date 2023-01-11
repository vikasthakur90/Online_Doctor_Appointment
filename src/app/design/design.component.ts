import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  constructor(public dialog:MatDialog,private route:Router) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(FeedbackComponent,{height: '600px',
    width: '700px',
    autoFocus: false,});
    dialogRef.afterClosed().subscribe();
  }
  onLogout(){
    this.route.navigate(["login"])
  }
}
