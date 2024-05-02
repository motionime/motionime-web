"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ParentComponentProps } from "@/app/_components/_types";

const AosProvider = ({ children }: ParentComponentProps) => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <AnimatePresence initial={true} mode="wait">
      {children}
    </AnimatePresence>
  );
};

export default AosProvider;
