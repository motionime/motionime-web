export type TNavbarMenu = {
  text: string;
  path: string;
};

export const navbarMenu: TNavbarMenu[] = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Event", path: "/event" },
  { text: "Catalog", path: "/catalog" },
  { text: "Support", path: "/support" },
];
