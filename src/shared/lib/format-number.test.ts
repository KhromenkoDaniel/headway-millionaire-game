import { formatNumber } from './format-number';

test('formats number as currency', () => {
  expect(formatNumber(1000)).toBe('$1,000');
  expect(
    formatNumber(1000, { locale: 'de-DE', options: { style: 'currency', currency: 'EUR' } })
  ).toBe('1.000,00 €');
});
