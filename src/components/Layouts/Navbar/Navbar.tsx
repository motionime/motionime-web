import Link from "next/link";
import { usePathname } from "next/navigation";

import useScroll from "@/hooks/useScroll";
import { Drawer } from "./Drawer";
import { Socials } from "./Socials";
import { useCursorContext } from "@/context/CursorContext";
import { cn } from "@/utils";
import { navbarMenu } from "@/data";

export const Navbar = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const cursor = useCursorContext();
  const pathname = usePathname();
  const isUnderline = pathname === "/" || pathname === "/about";
  const scrolled = useScroll(700);
  const isTextPrimary = scrolled && pathname === "/about";

  return (
    <header
      className={cn(
        `fixed w-full z-30 h-24 flex items-center justify-center px-2 xl:px-1 transition-all duration-700 text-white`,
        {
          "text-primary": isTextPrimary,
        },
      )}
      {...props}
    >
      <div className="flex items-center justify-between w-full max-w-[1400px] backdrop-blur-xl lg:bg-transparent rounded-full lg:py-3 lg:px-5 px-3 py-2 border-b border-[rgba(234,234,234,34)] lg:border-none">
        <Link href="/">
          <a
            onMouseEnter={() => cursor?.mouseEnterHandler()}
            onMouseLeave={() => cursor?.mouseLeaveHandler()}
            className="font-motion_ime text-3xl"
          >
            Motion Ime
          </a>
        </Link>

        <nav
          className="hidden lg:flex gap-x-12"
          onMouseEnter={() => cursor?.mouseEnterHandler()}
          onMouseLeave={() => cursor?.mouseLeaveHandler()}
        >
          {navbarMenu.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <a
                  className={`font-bold transition ${
                    isUnderline
                      ? "underline-on-hover"
                      : "hover:underline underline-offset-[6px]"
                  } `}
                  onClick={() => scrollTo(0, 0)}
                >
                  {item.text}
                </a>
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
