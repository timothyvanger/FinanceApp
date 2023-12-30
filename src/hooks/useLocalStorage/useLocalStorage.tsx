import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue: any, name: string) => {
  const [data, setData] = useState(() => {
    const localData = window.localStorage.getItem(name);
    if (!localData) return initialValue;
    return JSON.parse(localData);
  });

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(data));
  }, [data]);
  return [data, setData];
};
