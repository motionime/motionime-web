import { Metadata } from "next";

import { Support } from "./_components/Support";
import { Footer } from "../_components/_ui/Footer";

export const metadata: Metadata = {
  title: "Motion Ime | Support",
};

export default function page() {
  return (
    <>
      <Support />
      <Footer className="bg-inherit" />
    </>
  );
}
