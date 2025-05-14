type FormatOptions = {
  locale?: string;
  options?: Intl.NumberFormatOptions;
};

export function formatNumber(
  num: number,
  {
    locale = 'en-US',
    options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0 },
  }: FormatOptions = {}
): string {
  return new Intl.NumberFormat(locale, options).format(num);
}
