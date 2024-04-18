import { useCallback, useEffect, useState } from "react";

// threshold is a variable where the user scrolls to.
export default function useScroll(threshold) {
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
