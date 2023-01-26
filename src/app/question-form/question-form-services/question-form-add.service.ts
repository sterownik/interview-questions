import { QuestionFormBaseService } from './question-form-base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionFormAddService extends QuestionFormBaseService {
  formTitle = 'Dodaj pytanie';

  constructor() {
    super();
  }
}
