import { ImInstagram } from "react-icons/im";
import { HiShoppingBag } from "react-icons/hi";
import { IoLogoTiktok } from "react-icons/io5";
import { IconType } from "react-icons";

type TSocialMenu = {
  icon: IconType;
  path: string;
  title: string;
};

export const socialsMenu: TSocialMenu[] = [
  {
    icon: ImInstagram,
    path: "https://www.instagram.com/motion.ime/",
    title: "Instagram",
  },
  {
    icon: IoLogoTiktok,
    path: "https://www.tiktok.com/@motionime",
    title: "Tiktok",
  },
  {
    icon: HiShoppingBag,
    path: "https://www.tokopedia.com/motionime",
    title: "Tokopedia",
  },
];
