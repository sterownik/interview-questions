import { QuestionFormBaseService } from './question-form-base.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionValue } from '../question-value.interface';
import uniqid from 'uniqid';
import { QuestionAppLocalStorageManaging } from 'src/app/services/question-app-local-storage-managing.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionFormAddService extends QuestionFormBaseService {
  formValue = of({
    id: uniqid(),
    links: [],
  });
  formTitle = 'Dodaj pytanie';

  constructor(
    private questionAppLocalStorageManaging: QuestionAppLocalStorageManaging
  ) {
    super();
  }

  submitAction = (questionFormValue: QuestionValue) => {
    this.questionAppLocalStorageManaging.addQuestion(questionFormValue);
  };
}
