import { cn } from "@/utils";
import { Socials } from "../Navbar/Socials";

export const Footer = ({
  className = "bg-primary text-white",
}: React.HTMLProps<HTMLDivElement>) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={cn(`w-screen py-8`, className)}>
      <div className="max-w-7xl px-2 mx-auto">
        <hr className="my-[2rem] h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
        <div className="mb-4">
          <h1 className="font-motion_ime text-3xl">Motion Ime</h1>
        </div>
        <div>
          <Socials className="text-2xl" />
        </div>

        <hr className="my-[2rem] h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

        <p>
          © {currentYear} BY{" "}
          <span className="font-motion_ime">MOTION IME.</span> ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  );
};
