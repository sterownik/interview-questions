import { Component, OnInit } from '@angular/core';
import { QuestionFormBaseService } from './question-form-services/question-form-base.service';
import categories from '../common/categories.json';
import { QuestionFormService } from './question-form.service';
import { QuestionFormValue } from './question-form-value.interface';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
})
export class QuestionFormComponent implements OnInit {
  categories = categories;
  formData!: Partial<QuestionFormValue>;

  formGroup = this.questionFormService.makeForm();

  constructor(
    public questionFormBaseService: QuestionFormBaseService,
    private questionFormService: QuestionFormService
  ) {}

  ngOnInit(): void {
    this.questionFormBaseService.formValue.subscribe((data) => {
      this.formData = data;

      this.formGroup.patchValue({
        id: this.formData.id,
        category: this.formData.category,
        question: this.formData.question,
      });
    });
  }

  submit() {
    console.log(this.formGroup);
  }
}
