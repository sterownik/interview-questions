import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionFormValue } from '../question-form-value.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class QuestionFormBaseService {
  abstract formTitle: string;
  abstract formValue: Observable<Partial<QuestionFormValue>>;

  abstract submitAction(questionFormValue: QuestionFormValue): void;

  constructor() {}
}
