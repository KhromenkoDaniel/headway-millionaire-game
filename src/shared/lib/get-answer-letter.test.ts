import { getAnswerLetter } from './get-answer-letter';

test('returns correct letter for index', () => {
  expect(getAnswerLetter(0)).toBe('A');
  expect(getAnswerLetter(1)).toBe('B');
  expect(getAnswerLetter(25)).toBe('Z');
});
