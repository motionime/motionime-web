import { Metadata } from "next";
import { Footer } from "../_components/_ui/Footer";
import { About } from "./_components/About";

export const metadata: Metadata = {
  title: "Motion Ime | About",
};

export default function page() {
  return (
    <>
      <About />
      <Footer className="bg-gradient-to-b from-[#caadff] to-[#e6d7ff] to-55%" />
    </>
  );
}
