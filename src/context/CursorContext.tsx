"use client";

import { createContext, useEffect, useState, useContext } from "react";

type CursorContextType = {
  cursorVariants: {
    [key: string]: {
      x?: number;
      y?: number;
      width?: string;
      height?: string;
      backgroundColor: string;
      mixBlendMode?: string;
    };
  };
  cursorBG: string;
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
};

const CursorContext = createContext<CursorContextType | null>(null);

export const useCursorContext = () => useContext(CursorContext);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  // cursor position state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // cursor background state
  const [cursorBG, setCursorBG] = useState("default");

  const IsClient = typeof window !== "undefined";

  const mobileViewport = IsClient && window.innerWidth <= 768;

  useEffect(() => {
    if (!mobileViewport && IsClient) {
      const move = (e: MouseEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    } else setCursorBG("none");
  }, [mobileViewport]);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "rgba(18, 18, 18,.55)",
    },
    text: {
      width: "100px",
      height: "100px",
      x: cursorPos.x - 48,
      y: cursorPos.y - 48,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    none: {
      width: "0",
      height: "0",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  };

  function mouseEnterHandler() {
    setCursorBG("text");
  }
  function mouseLeaveHandler() {
    setCursorBG("default");
  }

  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}
    >
      {children}
    </CursorContext.Provider>
  );
};
