import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import firstQuestions from '../common/first-questions.json';
import { QuestionFormValue } from '../question-form/question-form-value.interface';
import { QuestionsListValuesOmit } from '../questions-list/questions-list-values.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class QuestionAppLocalStorageManaging {
  constructor(private router: Router) {}

  getValuesToList(): Observable<QuestionsListValuesOmit> {
    if (!localStorage.getItem('appQuestions')) {
      localStorage.setItem('appQuestions', JSON.stringify(firstQuestions));
    }

    const localData = this.actualLocalStorageData;

    return of(localData).pipe(
      map((localStorage: QuestionFormValue[]) => {
        return localStorage.map((questionFormValue: QuestionFormValue) => {
          return {
            id: questionFormValue.id,
            category: questionFormValue.category,
            question: questionFormValue.question,
          };
        });
      })
    );
  }

  getSingleQuestion(id: string): Observable<QuestionFormValue> {
    if (!localStorage.getItem('appQuestions')) {
      localStorage.setItem('appQuestions', JSON.stringify(firstQuestions));
    }

    const localData = this.actualLocalStorageData;

    return of(localData).pipe(
      map((localStorage: QuestionFormValue[]) => {
        return localStorage.find(
          (questionFormValue) => questionFormValue.id === id
        ) as QuestionFormValue;
      })
    );
  }

  editQuestion(questionFormValue: QuestionFormValue): void {
    const localData = this.actualLocalStorageData;

    const { id } = questionFormValue;

    const itemIdFromList = localData.findIndex(
      (question) => question.id === id
    );

    localData[itemIdFromList] = questionFormValue;

    localStorage.setItem('appQuestions', JSON.stringify(localData));
    this.router.navigate(['']);
  }

  deleteQuestion(id: string): void {
    const localData = this.actualLocalStorageData;

    const updatedQuestions = localData.filter((question) => question.id !== id);

    localStorage.setItem('appQuestions', JSON.stringify(updatedQuestions));
  }

  addQuestion(questionFormValue: QuestionFormValue): void {
    const localData = this.actualLocalStorageData;
    const newData = [questionFormValue, ...localData];

    localStorage.setItem('appQuestions', JSON.stringify(newData));

    this.router.navigate(['']);
  }

  get actualLocalStorageData(): QuestionFormValue[] {
    return JSON.parse(
      localStorage.getItem('appQuestions') as string
    ) as QuestionFormValue[];
  }
}
