import { createContext, useEffect, useState } from "react";
import { getTotalMemberDiscord } from "../vendor/api/discord";

export const TotalMemberContext = createContext();

export const TotalMemberProvider = ({ children }) => {
  const [total, setTotal] = useState("");

  function handleTotal(data) {
    setTotal(data);
  }

  useEffect(() => {
    getTotalMemberDiscord()
      .then(({ results }) => {
        handleTotal(results.byline);
      })
      .catch((err) =>
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
