import { createContext, useState, useEffect } from "react";

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  // cursor position state
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  // cursor background state
  const [cursorBG, setCursorBG] = useState("default");

  const mobileViewport = window.innerWidth <= 768;
  useEffect(() => {
    if (!mobileViewport) {
      const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    } else setCursorBG("none");
  });

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
