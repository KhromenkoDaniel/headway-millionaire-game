import { Answer } from '@shared/types';

export type QuizStatus = 'progress' | 'fail' | 'win';

export type Question = {
  id: number;
  question: string;
  answers: Answer[];
  sum: number;
};

export interface QuizState {
  questions: Question[];
  currentQuestion: Question | null;
  status: QuizStatus;
  sum: number;
}
