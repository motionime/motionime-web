import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { Drawer } from "./Drawer";
import { Socials } from "./Socials";

import useScroll from "../../../hooks/useScroll";
import { CursorContext } from "../../../context/CursorContext";
import { navbarMenu } from "../../../data";
import { cn, scrollTo } from "../../../utils";

export const Navbar = ({ className = "text-white" }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const location = useLocation();
  const c = className;
  const isUnderline =
    location?.pathname === "/" || location?.pathname === "/about";
  const scrolled = useScroll(700);
  const isTextPrimary = scrolled && location.pathname === "/about";

  return (
    <header
      className={cn(
        `fixed w-full z-30 h-24 flex items-center justify-center px-2 xl:px-1 transition-all duration-700 ${c}`,
        {
          "text-primary": isTextPrimary,
        },
      )}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] backdrop-blur-xl lg:bg-transparent rounded-full lg:py-3 lg:px-5 px-3 py-2 border-b border-[rgba(234,234,234,34)] lg:border-none">
        <Link
          to={"/"}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="font-motion_ime text-3xl"
        >
          Motion Ime
        </Link>

        <nav
          className="hidden lg:flex gap-x-12"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {navbarMenu.map((item, index) => {
            return (
              <Link
                key={index}
                className={`font-bold transition ${
                  isUnderline
                    ? "underline-on-hover"
                    : "hover:underline underline-offset-[6px]"
                } `}
                to={item.path}
                onClick={() => scrollTo(0, 0)}
              >
                {item.text}
              </Link>
            );
          })}
        </nav>

        {/* drawer for mobile navigation */}
        <Drawer />
        {/* end of drawer for mobile navigation */}
        <div className="hidden lg:flex ml-12">
          <Socials />
        </div>
      </div>
    </header>
  );
};
