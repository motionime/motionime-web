import { MotionImeProps } from "../../_types";

export const MotionImeText = ({
  exclamationMarks,
  isCapital,
}: MotionImeProps) => {
  const text = isCapital ? "Motion ime" : "motion ime";
  return (
    <span className="font-motion_ime">
      {text}
      {exclamationMarks && "!"}
    </span>
  );
};
