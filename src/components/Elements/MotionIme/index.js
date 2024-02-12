import { Link } from "react-router-dom";

export const MotionImeText = ({
  exclamationMarks = false,
  isCapital = false,
}) => {
  const text = isCapital ? "Motion ime" : "motion ime";
  return (
    <span className="font-motion_ime">
      {text}
      {exclamationMarks && "!"}
    </span>
  );
};
export const MotionImeLink = ({
  exclamationMarks = false,
  isCapital = false,
  className = "text-motion_ime_purple",
}) => {
  const text = isCapital ? "Motion ime" : "motion ime";
  const cn = className;
  return (
    <Link className={`font-motion_ime ${cn}`} to={"/"}>
      {text}
      {exclamationMarks && "!"}
    </Link>
  );
};
