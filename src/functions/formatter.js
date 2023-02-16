const FORMATTER = new Intl.NumberFormat(undefined, {currency: 'DZD', style: 'currency'})

export function formatThis(num) {
  return FORMATTER.format(num)
}