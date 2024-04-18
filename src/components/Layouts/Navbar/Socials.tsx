import { useCursorContext } from "@/context/CursorContext";
import { socialsMenu } from "@/data";

export const Socials = ({ ...props }: React.HTMLProps<HTMLUListElement>) => {
  const cursor = useCursorContext();
  return (
    <ul className={`flex gap-x-4 text-lg`} {...props}>
      {socialsMenu.map((social, _) => {
        return (
          <li
            key={_}
            onMouseEnter={cursor?.mouseEnterHandler}
            onMouseLeave={cursor?.mouseLeaveHandler}
          >
            <a href={social.path} target="_blank" rel="noopener noreferrer">
              <social.icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
