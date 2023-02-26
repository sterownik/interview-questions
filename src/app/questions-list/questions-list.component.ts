import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { DeleteQuestionDialogComponent } from '../delete-question-dialog/delete-question-dialog.component';
import { QuestionAppLocalStorageManaging } from '../services/question-app-local-storage-managing.service';
import { QuestionsListValuesOmit } from './questions-list-values.interface';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
})
export class QuestionsListComponent implements OnInit, OnDestroy {
  questions!: QuestionsListValuesOmit;

  destroy$: Subject<void> = new Subject<void>();

  reloadList = new Subject();

  constructor(
    private questionAppLocalStorageManaging: QuestionAppLocalStorageManaging,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.reloadList
      .pipe(
        startWith(true),
        switchMap(() => this.questionAppLocalStorageManaging.getValuesToList()),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        this.questions = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  openDeleteDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteQuestionDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => data),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        console.log(id);
        this.deleteQuestion(id);
        this.reloadList.next(true);
      });
  }

  deleteQuestion(id: string) {
    this.questionAppLocalStorageManaging.deleteQuestion(id);
  }
}
