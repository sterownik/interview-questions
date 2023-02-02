import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form-answers-controls',
  templateUrl: './question-form-answers-controls.component.html',
})
export class QuestionFormAnswersControlsComponent implements OnInit, OnChanges {
  @Input()
  formArray!: FormArray;

  @Input()
  answers!: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.answers) {
      this.addControls(this.answers);
    }
  }

  deleteControl(index: number) {
    this.formArray.removeAt(index);
  }

  addControls(answers: string[]): void {
    answers.forEach((answer) => this.addControl(answer));
  }

  addControl(answer?: string) {
    const { required, maxLength, minLength } = Validators;

    const control = new FormControl(answer || '', [
      required,
      maxLength(200),
      minLength(6),
    ]);
    this.formArray.push(control);
  }

  ngOnInit(): void {}
}
