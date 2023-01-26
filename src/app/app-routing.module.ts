import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  QuestionFormAddComponent,
  QuestionFormEditComponent,
} from './question-form/question-form-actions.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

const routes: Routes = [
  { path: '', component: QuestionsListComponent, pathMatch: 'full' },
  { path: 'add-question', component: QuestionFormAddComponent },
  { path: 'edit-question', component: QuestionFormEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
