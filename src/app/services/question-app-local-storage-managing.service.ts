import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import firstQuestions from '../common/first-questions.json';
import { QuestionValue } from '../question-form/question-value.interface';
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
      map((localStorage: QuestionValue[]) => {
        return localStorage.map((questionFormValue: QuestionValue) => {
          return {
            id: questionFormValue.id,
            category: questionFormValue.category,
            question: questionFormValue.question,
          };
        });
      })
    );
  }

  getSingleQuestion(id: string): Observable<QuestionValue> {
    if (!localStorage.getItem('appQuestions')) {
      localStorage.setItem('appQuestions', JSON.stringify(firstQuestions));
    }

    const localData = this.actualLocalStorageData;

    return of(localData).pipe(
      map((localStorage: QuestionValue[]) => {
        return localStorage.find(
          (questionFormValue) => questionFormValue.id === id
        ) as QuestionValue;
      })
    );
  }

  editQuestion(questionFormValue: QuestionValue): void {
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

  addQuestion(questionFormValue: QuestionValue): void {
    const localData = this.actualLocalStorageData;
    const newData = [questionFormValue, ...localData];

    localStorage.setItem('appQuestions', JSON.stringify(newData));

    this.router.navigate(['']);
  }

  get actualLocalStorageData(): QuestionValue[] {
    return JSON.parse(
      localStorage.getItem('appQuestions') as string
    ) as QuestionValue[];
  }
}
