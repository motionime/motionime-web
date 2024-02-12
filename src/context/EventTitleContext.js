import { createContext, useState } from "react";

export const EventTitleContext = createContext();

export const EventTitleProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  function handleTitle(data) {
    setTitle(data);
  }
  return (
    <EventTitleContext.Provider value={{ title, handleTitle }}>
      {children}
    </EventTitleContext.Provider>
  );
};
