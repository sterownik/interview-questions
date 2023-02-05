import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form-controls',
  templateUrl: './question-form-controls.component.html',
})
export class QuestionFormControlsComponent implements OnInit, OnChanges {
  @Input()
  formArray!: FormArray;

  @Input()
  contents!: string[];

  @Input()
  isLinksMode!: boolean;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.contents) {
      this.addControls(this.contents);
    }
  }

  get title() {
    return this.isLinksMode
      ? 'Dodaj link z powiązanym tematem'
      : 'Dodaj odpowiedź';
  }

  get inputLabel() {
    return this.isLinksMode ? 'Link' : 'Odpowiedź';
  }

  get inputPlaceholder() {
    return this.isLinksMode
      ? 'https://angular.io/guide/reactive-forms'
      : 'Reactive forms provide a model-driven...';
  }

  deleteControl(index: number) {
    this.formArray.removeAt(index);
  }

  addControls(contents: string[]): void {
    if (!contents) {
      this.addControl();
      return;
    }
    contents.forEach((content) => this.addControl(content));
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
