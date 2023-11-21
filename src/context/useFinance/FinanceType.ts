export type FinanceType = {
  title: string;
  date: string;
  location: string;
  time: string;
  id: number | string;
  cost: number;
  type: DifferentFinanceTypes;
};
export type DifferentFinanceTypes =
  | "expense"
  | "saving"
  | "transfer"
  | "subscription";
