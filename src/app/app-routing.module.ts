import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  QuestionFormAddComponent,
  QuestionFormEditComponent,
} from './question-form/question-form-actions.component';
import { QuestionViewerComponent } from './question-viewer/question-viewer.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

const routes: Routes = [
  { path: '', component: QuestionsListComponent, pathMatch: 'full' },
  { path: 'add', component: QuestionFormAddComponent },
  { path: 'edit/:id', component: QuestionFormEditComponent },
  { path: 'view/:id', component: QuestionViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
