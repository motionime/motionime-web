import { Metadata } from "next";
import "@/styles/fonts.css";
import "@/styles/global.css";

import { Navbar } from "./_components/_ui/Navbar";
import AosProvider from "@/providers/AosProvider";
import { CursorProvider } from "@/context/CursorContext";
import { TotalMemberProvider } from "@/context/TotalMemberContext";
import { Cursor } from "./_components/_ui/Cursor";

export const metadata: Metadata = {
  title: "Motion Ime",
  description:
    "Motion Ime is one of the largest discord community in Indonesia, founded by Windah Basudara, Rio Djaja, et al. Join and find your friends here!",
  keywords:
    "motionime, motion ime, windahbasudara, windah, windah basudara,motionime windah, motionime windahbasudara, jayaesport, motion ime windah basudara, motion ime windah",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <AosProvider>
            <TotalMemberProvider>
              <CursorProvider>
                <Navbar />
                {children}
                <Cursor />
              </CursorProvider>
            </TotalMemberProvider>
          </AosProvider>
        </div>
      </body>
    </html>
  );
}
