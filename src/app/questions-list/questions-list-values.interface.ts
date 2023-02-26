import { QuestionValue } from '../question-form/question-value.interface';

export type QuestionsListValuesOmit = Omit<
  QuestionValue,
  'answers' | 'links'
>[];
