import { DifferentFinanceTypes } from "./context/useFinance/FinanceType";

export const getColor = (type: DifferentFinanceTypes) => {
  switch (type) {
    case "expense":
      return "";
  }
};

export const getCurrency = (money: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(money);
};
