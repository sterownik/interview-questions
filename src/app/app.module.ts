import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {
  QuestionFormAddComponent,
  QuestionFormEditComponent,
} from './question-form/question-form-actions.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { QuestionFormAnswersControlsComponent } from './question-form/question-form-answers-controls/question-form-answers-controls.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    QuestionsListComponent,
    QuestionFormAddComponent,
    QuestionFormEditComponent,
    QuestionFormAnswersControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
