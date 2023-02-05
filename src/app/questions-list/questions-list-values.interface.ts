import { QuestionFormValue } from '../question-form/question-form-value.interface';

export type QuestionsListValuesOmit = Omit<
  QuestionFormValue,
  'answers' | 'links'
>[];
