import { QuestionFormBaseService } from './question-form-base.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionFormValue } from '../question-form-value.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionFormAddService extends QuestionFormBaseService {
  formValue = of({
    id: 'test3',
  });
  formTitle = 'Dodaj pytanie';

  constructor() {
    super();
  }
}
