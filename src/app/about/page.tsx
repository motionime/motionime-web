import { Metadata } from "next";
import { About } from "./_components/About";

export const metadata: Metadata = {
  title: "Motion Ime | About",
};

export default function page() {
  return (
    <>
      <About />
    </>
  );
}
