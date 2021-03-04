export const formatPrice = (price: number, currencySymbol: string, locale = "en-US"): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencySymbol,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export const formatNumber = (value: number, locale = "en-US"): string => {
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}