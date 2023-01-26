import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class QuestionFormBaseService {
  abstract formTitle: string;

  constructor() {}
}
