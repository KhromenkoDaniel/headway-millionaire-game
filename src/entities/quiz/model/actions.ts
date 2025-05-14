import { createAction } from '@reduxjs/toolkit';
import { Question } from '@entities/quiz/model/types';

export const addToSum = createAction<number>('quiz/addToSum');
export const fail = createAction('quiz/fail');
export const win = createAction('quiz/win');
export const nextQuestion = createAction<Question>('quiz/nextQuestion');
