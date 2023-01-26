import { Component, OnInit } from '@angular/core';
import { QuestionFormAddService } from './question-form-services/question-form-add.service';
import { QuestionFormBaseService } from './question-form-services/question-form-base.service';
import { QuestionFormEditService } from './question-form-services/question-form-edit.service';

@Component({
  selector: 'app-question-form-add',
  template: '<app-question-form></app-question-form>',
  providers: [
    { provide: QuestionFormBaseService, useClass: QuestionFormAddService },
  ],
})
export class QuestionFormAddComponent implements OnInit {
  ngOnInit(): void {}
}

@Component({
  selector: 'app-question-form-edit',
  template: '<app-question-form></app-question-form>',
  providers: [
    { provide: QuestionFormBaseService, useClass: QuestionFormEditService },
  ],
})
export class QuestionFormEditComponent implements OnInit {
  ngOnInit(): void {}
}
