import { ReactNode, createContext, useContext, useState } from "react";
import image from "../../layout/images/image.png";
import { parse } from "@fortawesome/fontawesome-svg-core";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";

type ProfileDateType = {
  profile: any;
  addToAccount: (cost: number) => void;
  subtractToAccount: (cost: number) => void;
  incomeChecks: IncomeTasksChecks[];
  addToIncomeArray: (location: string) => void;
  clearProfile: () => void;
  changeIncome: (number: number) => void;
};

type Profile = {
  name: string;
  income: number;
  masterBalance: number;
  profilePic: string;
  id: string;
  tag: string;
};
type IncomeTasksChecks = {
  location: string;
  id: string;
  amount: number;
  date: string;
  time: string;
};
const currentProfile: Profile = {
  name: "tmothie",
  income: 640,
  masterBalance: 0,
  profilePic: image,
  tag: "MSTR",
  id: "master",
};

const ProfileContext = createContext<ProfileDateType | undefined>(undefined);

export const useProfile = (): ProfileDateType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("Make sure you are using this context in the right place");
  }
  return context;
};

type ProfileProviderProps = {
  children: ReactNode;
};

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const [profile, setProfile] = useLocalStorage(currentProfile, "MASTER");
  const [incomeChecks, setIncomeChecks] = useState<IncomeTasksChecks[]>([]);

  const addToIncomeArray = (location: string) => {
    setIncomeChecks((prev) => {
      return [
        ...prev,
        {
          location: location,
          id: crypto.randomUUID(),
          amount: profile.income,
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        },
      ];
    });
    addToAccount(profile.income);
  };

  const addToAccount = (cost: number) => {
    const tempBalance = profile.masterBalance + parseFloat(cost);
    setProfile((prev) => {
      return { ...prev, masterBalance: tempBalance };
    });
  };
  const subtractToAccount = (cost: number) => {
    setProfile((prev) => {
      return { ...prev, masterBalance: prev.masterBalance - cost };
    });
  };

  const changeIncome = (number: number) => {
    setProfile((prev) => {
      return { ...prev, income: number };
    });
  };

  const clearProfile = () => {
    setProfile((prev) => {
      return { ...prev, income: 0, masterBalance: 0 };
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        addToAccount,
        subtractToAccount,
        incomeChecks,
        addToIncomeArray,
        clearProfile,
        changeIncome,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
