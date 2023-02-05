import { Component, OnInit } from '@angular/core';
import { QuestionAppLocalStorageManaging } from '../services/question-app-local-storage-managing.service';
import { QuestionsListValuesOmit } from './questions-list-values.interface';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
})
export class QuestionsListComponent implements OnInit {
  questions!: QuestionsListValuesOmit;

  constructor(
    private questionAppLocalStorageManaging: QuestionAppLocalStorageManaging
  ) {}

  ngOnInit(): void {
    this.questionAppLocalStorageManaging.getValuesToList().subscribe((data) => {
      this.questions = data;
    });
  }
}
