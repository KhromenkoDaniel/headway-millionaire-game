import { createAction } from '@reduxjs/toolkit';
import { Question } from '@entities/quiz/model/types';

export const setSum = createAction<number>('quiz/setSum');
export const fail = createAction('quiz/fail');
export const win = createAction('quiz/win');
export const nextQuestion = createAction<Question>('quiz/nextQuestion');
