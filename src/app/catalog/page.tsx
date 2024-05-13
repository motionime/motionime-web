import { Metadata } from "next";

import { Footer } from "../_components/_ui/Footer";
import { Catalog } from "./_components/Catalog";

export const metadata: Metadata = {
  title: "Motion Ime | Catalog",
};

export default function page() {
  return (
    <>
      <Catalog />
      <Footer className="bg-inherit" />
    </>
  );
}
