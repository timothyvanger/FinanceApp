import { Account } from "../useAccount/AccountType";

export type FinanceType = {
  title: string;
  date: string;
  location: string;
  time: string;
  id: number | string;
  cost: number;
  type: DifferentFinanceTypes;
  accountSelection: Account;
};
export type DifferentFinanceTypes =
  | "expense"
  | "saving"
  | "transfer"
  | "subscription";
