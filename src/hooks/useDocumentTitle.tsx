import { useEffect, useRef } from "react";
import { NeedToChange } from "@/app/_components/_types";

export function useDocumentTitle(
  title: NeedToChange,
  prevailOnUnmount = false,
) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [prevailOnUnmount],
  );
}
