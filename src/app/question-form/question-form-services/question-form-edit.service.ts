import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { QuestionAppLocalStorageManaging } from 'src/app/services/question-app-local-storage-managing.service';
import { QuestionValue } from '../question-value.interface';
import { QuestionFormBaseService } from './question-form-base.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionFormEditService extends QuestionFormBaseService {
  submitAction(questionFormValue: QuestionValue): void {
    this.questionAppLocalStorageManaging.editQuestion(questionFormValue);
  }
  formValue = this.getQuestionToForm();
  formTitle = 'Edytuj pytanie';

  constructor(
    private route: ActivatedRoute,
    private questionAppLocalStorageManaging: QuestionAppLocalStorageManaging
  ) {
    super();
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
