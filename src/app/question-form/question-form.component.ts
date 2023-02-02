import { Component, OnInit } from '@angular/core';
import { QuestionFormBaseService } from './question-form-services/question-form-base.service';
import categories from '../common/categories.json';
import { QuestionFormService } from './question-form.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
})
export class QuestionFormComponent implements OnInit {
  categories = categories;
  answers = ['bo tak', 'bo tak 2', 'bo tak 3'];

  formGroup = this.questionFormService.makeForm();

  constructor(
    public questionFormBaseService: QuestionFormBaseService,
    private questionFormService: QuestionFormService
  ) {}

  ngOnInit(): void {}
}
