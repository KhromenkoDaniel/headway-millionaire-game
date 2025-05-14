import { createAsyncThunk } from '@reduxjs/toolkit';
import { Answer } from '@/shared/types';
import { RootState } from '@/app/store';
import { addToSum } from './actions';

export const verifyAnswerAsync = createAsyncThunk(
  'quiz/verifyAnswer',
  async (answer: Answer, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { currentQuestion } = state.quiz;

    if (!answer.correct) {
      setTimeout(() => {
        dispatch({ type: 'quiz/fail' });
      }, 1000);
      return;
    }

    if (currentQuestion?.sum) {
      dispatch(addToSum(currentQuestion.sum));
    }

    const currentIndex = state.quiz.questions.findIndex(q => q.id === currentQuestion?.id);
    const next = state.quiz.questions[currentIndex + 1];

    if (next) {
      setTimeout(() => {
        dispatch({ type: 'quiz/nextQuestion', payload: next });
      }, 1200);
    } else {
      setTimeout(() => {
        dispatch({ type: 'quiz/win' });
      }, 1000);
    }
  }
);
