export type Account = {
  title: string;
  accTag: string;
  description: string;
  balance: number;
  accountType: accountType;
  id: string;
  goalBalance?: number;
};

export type accountType = "savings " | "goal";
type accountTypeObject = {
  savings: accountType;
  goal: accountType;
};

export const accountTypes: accountTypeObject = {
  savings: "savings ",
  goal: "goal",
};
