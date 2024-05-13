"use client";

import { createContext, useState, ReactNode, useContext } from "react";

type TEventTitleContext = {
  title: string;
  handleTitle: (data: string) => void;
};

export const EventTitleContext = createContext<TEventTitleContext | null>(null);

export const useEventTitleContext = () => useContext(EventTitleContext);

export const EventTitleProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");

  function handleTitle(data: string) {
    setTitle(data);
  }
  return (
    <EventTitleContext.Provider value={{ title, handleTitle }}>
      {children}
    </EventTitleContext.Provider>
  );
};
