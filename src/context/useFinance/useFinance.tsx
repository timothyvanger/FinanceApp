import { ReactNode, createContext, useContext, useState } from "react";
import { FinanceType, DifferentFinanceTypes } from "./FinanceType";
import { useAccount } from "../useAccount/useAccount";
import { Account } from "../useAccount/AccountType";
import { useProfile } from "../../hooks/useProfile/useProfile";

type FinanceDataType = {
  financeAll: FinanceType[];
  addFinance: (
    title: string,
    date: string,
    cost: number,
    type: DifferentFinanceTypes,
    location: string,
    accountSelection: Account
  ) => void;

  deleteFinance: (id: string) => void;
};
type ProviderType = {
  children: ReactNode;
};

const FinanceContext = createContext<FinanceDataType | undefined>(undefined);

export const useFinance = (): FinanceDataType => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("Make sure it is in the right context");
  }

  return context;
};

export const FinanceProvider = ({ children }: ProviderType) => {
  const [financeAll, setFinanceAll] = useState<FinanceType[]>([]);
  const { subtractCost, addToBalance } = useAccount();
  const { addToAccount, subtractToAccount } = useProfile();

  const addFinance = (
    title: string,
    date: string,
    cost: number,
    type: DifferentFinanceTypes,
    location: string,
    accountSelection: Account | string
  ) => {
    console.log(accountSelection);
    if (typeof accountSelection === "string") {
      editMasterAccount(type, cost);
    } else {
      editAccount(accountSelection, type, cost);
    }

    setFinanceAll((prev) => {
      return [
        ...prev,
        {
          title,
          date,
          time: new Date().toLocaleTimeString(),
          id: crypto.randomUUID(),
          cost: cost,
          type: type,
          location: location,
          accountSelection: accountSelection,
        },
      ];
    });
  };
  const editMasterAccount = (type: DifferentFinanceTypes, cost: number) => {
    switch (type) {
      case "expense":
        subtractToAccount(cost);
        break;
      case "saving":
        addToAccount(cost);
        break;

      default:
        throw new Error("There is no financeType");
    }
  };
  const editAccount = (
    accountSelection: Account,
    financeType: DifferentFinanceTypes,
    cost: number
  ) => {
    switch (financeType) {
      case "expense":
        subtractCost(cost, accountSelection.id);
        break;
      case "saving":
        addToBalance(cost, accountSelection.id);
        break;

      default:
        throw new Error("There is no financeType");
    }
  };

  const deleteFinance = (id: any) => {
    setFinanceAll((prev) => prev.filter((finance) => finance.id !== id));
  };
  return (
    <FinanceContext.Provider value={{ financeAll, addFinance, deleteFinance }}>
      {children}
    </FinanceContext.Provider>
  );
};
