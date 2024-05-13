import { Metadata } from "next";
import { Hero } from "./_components/Hero";

export const metadata: Metadata = {
  title: "Motion Ime | Home",
};

export default function page() {
  return <Hero />;
}
