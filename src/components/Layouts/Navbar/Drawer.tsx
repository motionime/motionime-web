import { useState } from "react";
import { motion } from "framer-motion";

import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

import { navbarMenu } from "@/data";
import { ButtonJoinNow } from "@/components/Elements/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

export const Drawer = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }
  return (
    <nav className="text-inherit lg:hidden">
      <div
        className={`text-3xl cursor-pointer ${
          pathname === "/catalog" ? "text-primary" : "text-inherit"
        }`}
        onClick={handleOpenMenu}
      >
        <CgMenuRight />
      </div>

      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute -top-[22px] -right-2 max-w-xs h-screen z-20"
      >
        <div
          className="text-4xl absolute z-30 left-4 top-8 text-primary cursor-pointer"
          onClick={handleOpenMenu}
        >
          <IoMdClose />
        </div>
        <ul className=" h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl">
          {navbarMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`${
                    location.pathname === item.path ? "underline" : ""
                  }`}
                  onClick={() => {
                    handleOpenMenu();
                    scrollTo(0, 0);
                  }}
                >
                  {item.text}
                </Link>
              </li>
            );
          })}
          <li>
            <ButtonJoinNow />
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};
