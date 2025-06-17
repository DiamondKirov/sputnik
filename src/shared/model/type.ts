import type { PropsWithChildren } from "react";

export interface IFCProps extends PropsWithChildren {
  className?: string;
}

export type CurrencyType = "RUB" | "USD" | "EUR";

export interface IProduct {
  title: string;
  origin: string;
  price: {
    current: number;
    currency: CurrencyType;
  };
  imageUrl: string;
}
