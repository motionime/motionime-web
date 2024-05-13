"use client";

import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { getTotalMemberDiscord } from "../vendor/api/discord";

type TTotalMemberContext = {
  total: string;
};

type TotalMemberProviderProps = {
  children: ReactNode;
};

export const TotalMemberContext = createContext<TTotalMemberContext | null>(
  null,
);

export const useTotalMemberContext = () => useContext(TotalMemberContext);

export const TotalMemberProvider = ({ children }: TotalMemberProviderProps) => {
  const [total, setTotal] = useState<string>("");

  function handleTotal(data: string) {
    setTotal(data);
  }

  useEffect(() => {
    getTotalMemberDiscord()
      .then(({ results }) => {
        handleTotal(results.byline);
      })
      .catch((err: any) =>
        console.log("failed to contact discord api", err?.message),
      )
      .finally(() => console.log("get total member discord"));
  }, []);
  return (
    <TotalMemberContext.Provider value={{ total }}>
      {children}
    </TotalMemberContext.Provider>
  );
};
