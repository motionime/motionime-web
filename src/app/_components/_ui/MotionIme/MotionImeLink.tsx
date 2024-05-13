import Link from "next/link";
import { MotionImeProps } from "../../_types";
import { cn } from "@/utils";

export const MotionImeLink = ({
  exclamationMarks,
  isCapital,
  ...props
}: MotionImeProps) => {
  const text = isCapital ? "Motion ime" : "motion ime";
  return (
    <Link
      {...props}
      className={cn(`font-motion_ime`, props.className)}
      href={"/"}
    >
      {text}
      {exclamationMarks && "!"}
    </Link>
  );
};
