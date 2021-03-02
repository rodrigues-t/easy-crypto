export const formatPrice = (price: number, currencySymbol: string): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencySymbol,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}