import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '@/entities/quiz/model/slice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
