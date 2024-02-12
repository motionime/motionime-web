import { useContext } from "react";

import { CursorContext } from "../../../context/CursorContext";
import { socialsMenu } from "../../../data";

export const Socials = ({ className = "text-lg" }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const c = className;
  return (
    <ul className={`flex gap-x-4 ${c}`}>
      {socialsMenu.map((social, index) => {
        return (
          <li
            key={index}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <a href={social.path} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
