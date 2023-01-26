import { Component, OnInit } from '@angular/core';
import { QuestionFormBaseService } from './question-form-services/question-form-base.service';
import categories from '../common/categories.json';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
})
export class QuestionFormComponent implements OnInit {
  categories = categories;

  constructor(public questionFormBaseService: QuestionFormBaseService) {
    console.log(categories);
  }

  ngOnInit(): void {}
}
