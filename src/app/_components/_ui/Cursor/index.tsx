"use client";

import { motion, Variants } from "framer-motion";

import { useCursorContext } from "@/context/CursorContext";

export const Cursor = () => {
  const cursor = useCursorContext();

  return (
    <motion.div
      variants={cursor?.cursorVariants as Variants}
      animate={cursor?.cursorBG}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
    />
  );
};
