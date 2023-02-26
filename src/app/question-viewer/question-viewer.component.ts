import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { QuestionValue } from '../question-form/question-value.interface';
import { QuestionAppLocalStorageManaging } from '../services/question-app-local-storage-managing.service';

@Component({
  selector: 'app-question-viewer',
  templateUrl: './question-viewer.component.html',
})
export class QuestionViewerComponent implements OnInit, OnDestroy {
  questionValue!: QuestionValue;

  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private questionAppLocalStorageManaging: QuestionAppLocalStorageManaging
  ) {}

  ngOnInit(): void {
    this.getQuestionToForm()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.questionValue = data;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  getQuestionToForm(): Observable<QuestionValue> {
    return this.route.params.pipe(
      switchMap((params) => {
        return this.questionAppLocalStorageManaging.getSingleQuestion(
          params.id
        );
      })
    );
  }
}
