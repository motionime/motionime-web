import { Metadata } from "next";
import { Role } from "./_components/Role";

export const metadata: Metadata = {
  title: "Motion Ime | Role",
};

export default function page() {
  return <Role />;
}
