import { Injectable } from '@angular/core';
import { QuestionFormBaseService } from './question-form-base.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionFormEditService extends QuestionFormBaseService {
  formTitle = 'Edytuj pytanie';

  constructor() {
    super();
  }
}
