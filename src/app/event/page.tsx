import { Metadata } from "next";
import { Footer } from "../_components/_ui/Footer";
import Event from "./_components/Event";

export const metadata: Metadata = {
  title: "Motion Ime | Event",
};

export default function page() {
  return (
    <div className="bg-neutral-950 text-white">
      <Event />
      <Footer className="bg-inherit" />
    </div>
  );
}
