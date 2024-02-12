import { useContext } from "react";
import { motion } from "../../../utils/motion";
import { CursorContext } from "../../../context/CursorContext";

export const Cursor = () => {
  const { cursorVariants, cursorBG } = useContext(CursorContext);

  return (
    <motion.div
      variants={cursorVariants}
      animate={cursorBG}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
    />
  );
};
