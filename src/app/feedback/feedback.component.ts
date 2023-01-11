import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(
    public dialogRef: MatDialogRef<FeedbackComponent>
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

}
