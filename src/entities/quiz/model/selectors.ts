import { createSelector } from 'reselect';
import { RootState } from '@/app/store';

export const selectQuiz = (state: RootState) => state.quiz;

export const selectCurrentQuestion = (state: RootState) => state.quiz.currentQuestion;

export const selectQuizStatus = (state: RootState) => state.quiz.status;

export const selectPrizeSteps = createSelector([selectQuiz], quiz =>
  [...quiz.questions.map(q => q.sum)].sort((a, b) => b - a)
);
