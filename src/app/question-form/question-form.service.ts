import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class QuestionFormService {
  constructor(private fb: FormBuilder) {}

  public makeForm() {
    const { required, minLength, maxLength } = Validators;

    return this.fb.group({
      id: this.fb.control('', [required]),
      category: this.fb.control('', [required]),
      question: this.fb.control('', [required, minLength(6), maxLength(300)]),
      answers: this.fb.array([], [required]),
      links: this.fb.array([]),
    });
  }
}
