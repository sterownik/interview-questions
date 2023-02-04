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
  links = [
    'https://www.youtube.com/watch?v=p2pkQnl0PuQ&list=RDp2pkQnl0PuQ&start_radio=1&ab_channel=BrodkaVEVO',
    'https://www.youtube.com/watch?v=YitTgxstjOY&list=RDp2pkQnl0PuQ&index=7&ab_channel=TEDEWIZJA',
  ];

  formGroup = this.questionFormService.makeForm();

  constructor(
    public questionFormBaseService: QuestionFormBaseService,
    private questionFormService: QuestionFormService
  ) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.formGroup.value);
  }
}
