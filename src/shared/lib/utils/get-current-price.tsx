import type { CurrencyType } from "../../model/type";

export const getCurrentPrice = (
  price: number = 0,
  currency: CurrencyType = "RUB"
) => {
  return Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: currency,
  }).format(price / 100);
};
