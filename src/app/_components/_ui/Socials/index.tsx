"use client";

import Link from "next/link";

import { useCursorContext } from "@/context/CursorContext";
import { socialsMenu } from "@/data";
import { cn } from "@/utils";

export const Socials = ({ ...props }: React.HTMLProps<HTMLUListElement>) => {
  const cursor = useCursorContext();
  return (
    <ul {...props} className={cn(`flex gap-x-4 text-lg`, props.className)}>
      {socialsMenu.map((social, _) => {
        return (
          <li
            key={_}
            onMouseEnter={cursor?.mouseEnterHandler}
            onMouseLeave={cursor?.mouseLeaveHandler}
          >
            <Link href={social.path} target="_blank" rel="noopener noreferrer">
              <social.icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
