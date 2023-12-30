import { createContext, ReactNode, useContext, useState } from "react";
import { Account, accountType } from "./AccountType";

type AccountDataType = {
  accounts: Account[];
  addNewAccount: (
    title: string,
    description: string,
    balance: number,
    accountType: accountType,
    accTag: string
  ) => void;
  subtractCost: (cost: number, id: string) => void;
  addToBalance: (cost: number, id: string) => void;
  deleteAccount: (id: string) => void;
};

type AccountProviderProp = {
  children: ReactNode;
};

const randomData: Account[] = [
  {
    title: "Main balance account",
    description: "The account used for everything",
    balance: 10,
    accountType: "savings ",
    id: crypto.randomUUID(),
    accTag: "MAIN",
  },
  {
    title: "This is Japan Trip Goal",
    description: "Goal trip for Japan",
    balance: 0,
    goalBalance: 2500,
    accountType: "goal",
    id: crypto.randomUUID(),
    accTag: "JPN",
  },
];

const AccountContext = createContext<AccountDataType | undefined>(undefined);

export const useAccount = (): AccountDataType => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("Make sure you are using this context in the right place");
  }
  return context;
};

export const AccountProvider = ({ children }: AccountProviderProp) => {
  const [accounts, setAccount] = useState<Account[]>(randomData);

  const addNewAccount = (
    title: string,
    description: string,
    balance: number,
    accountType: accountType,
    accTag: string
  ) => {
    setAccount((prev) => {
      return [
        ...prev,
        {
          title,
          description,
          balance,
          accountType,
          id: crypto.randomUUID(),
          accTag,
        },
      ];
    });
  };
  const deleteAccount = (id: string) => {
    setAccount((accounts) => {
      return accounts.filter((acc) => acc.id !== id);
    });
  };

  const subtractCost = (cost: number, id: string) => {
    setAccount((prev) => {
      return prev.map((account) => {
        if (account.id === id) {
          return { ...account, balance: account.balance - cost };
        }
        return account;
      });
    });
  };
  const addToBalance = (cost: number, id: string) => {
    setAccount((prev) => {
      return prev.map((account) => {
        if (account.id === id) {
          const tempBalance = account.balance + parseFloat(cost);
          return { ...account, balance: tempBalance };
        }
        return account;
      });
    });
  };

  return (
    <AccountContext.Provider
      value={{
        accounts,
        addNewAccount,
        subtractCost,
        addToBalance,
        deleteAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
