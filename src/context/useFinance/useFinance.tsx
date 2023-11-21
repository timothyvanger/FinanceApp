import { ReactNode, createContext, useContext, useState } from "react";
import { FinanceType } from "./FinanceType";

const FinanceContext = createContext<FinanceType[] | undefined>(undefined);

export const useFinance = (): FinanceType[] => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error("Make sure it is in the right context");
  }

  return context;
};

type ProviderType = {
  children: ReactNode;
};
export const FinanceProvider = ({ children }: ProviderType) => {
  const [financeAll, setFinanceAll] = useState<FinanceType[]>([
    {
      title: "Adobe Photoshop",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      id: crypto.randomUUID(),
      cost: 24.99,
      type: "subscription",
      location: "Adobe",
    },
    {
      title: "Wingstop",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      id: crypto.randomUUID(),
      cost: 30.99,
      type: "expense",
      location: "Door Dash",
    },
  ]);
  console.log(financeAll);
  return (
    <FinanceContext.Provider value={financeAll}>
      {children}
    </FinanceContext.Provider>
  );
};
