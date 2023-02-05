import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import firstQuestions from '../common/first-questions.json';
import { QuestionFormValue } from '../question-form/question-form-value.interface';
import { QuestionsListValuesOmit } from '../questions-list/questions-list-values.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class QuestionAppLocalStorageManaging {
  constructor() {}

  getValuesToList(): Observable<QuestionsListValuesOmit> {
    if (!localStorage.getItem('appQuestions')) {
      localStorage.setItem('appQuestions', JSON.stringify(firstQuestions));
    }

    const localData = JSON.parse(
      localStorage.getItem('appQuestions') as string
    );

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

    const localData = JSON.parse(
      localStorage.getItem('appQuestions') as string
    );

    return of(localData).pipe(
      map((localStorage: QuestionFormValue[]) => {
        return localStorage.find(
          (questionFormValue) => questionFormValue.id === id
        ) as QuestionFormValue;
      })
    );
  }
}
