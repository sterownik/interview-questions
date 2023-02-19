import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-question-dialog',
  templateUrl: './delete-question-dialog.component.html',
})
export class DeleteQuestionDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteQuestionDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
