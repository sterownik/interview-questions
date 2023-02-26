import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionValue } from '../question-value.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class QuestionFormBaseService {
  abstract formTitle: string;
  abstract formValue: Observable<Partial<QuestionValue>>;

  abstract submitAction(questionFormValue: QuestionValue): void;

  constructor() {}
}
