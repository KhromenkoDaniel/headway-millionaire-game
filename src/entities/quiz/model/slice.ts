import { createSlice } from '@reduxjs/toolkit';
import quizConfig from '@/shared/config/quiz-config.json';
import { QuizState } from './types';
import { fail, win, nextQuestion, setSum } from './actions';

const initialState: QuizState = {
  questions: quizConfig,
  currentQuestion: quizConfig[0] ?? null,
  sum: 0,
  status: 'progress',
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    restart(state) {
      state.status = 'progress';
      state.sum = 0;
      state.currentQuestion = state.questions[0] ?? null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setSum, (state, action) => {
        state.sum = action.payload;
      })
      .addCase(fail, state => {
        state.status = 'fail';
      })
      .addCase(win, state => {
        state.status = 'win';
        state.sum = state.currentQuestion?.sum ?? 0;
      })
      .addCase(nextQuestion, (state, action) => {
        state.currentQuestion = action.payload;
      });
  },
});

export const { restart } = quizSlice.actions;
export { setSum, fail, win, nextQuestion };
export default quizSlice.reducer;
