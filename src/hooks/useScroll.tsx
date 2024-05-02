import { NeedToChange } from "@/app/_components/_types";
import { useCallback, useEffect, useState } from "react";

// threshold is a variable where the user scrolls to.
export default function useScroll(threshold: NeedToChange) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
