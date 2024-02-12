import { Link } from "react-router-dom";
import "./Support.css"
import { Hero } from "./Hero";
import { GeneralFAQ } from "./GeneralFAQ";
import { OtherFAQ } from "./OtherFAQ";

export const Support = () => {
  return (
    <>
      <Hero />
      <GeneralFAQ />
      <OtherFAQ />

      <section className="w-screen h-auto">
        <div className="max-w-7xl mx-auto px-2">
          <div className="aspect-[2/1] sm:aspect-[3/1] lg:aspect-[4/1] rounded-lg bg-support py-8">
            <div
              className="flex flex-col justify-center items-center w-full h-full"
              data-aos="zoom-in"
            >
              <h2 className="text-white font-semibold sm:text-4xl text-xl">
                Still have questions?
              </h2>
              <Link
                to={"https://discord.com/invite/motionime"}
                className="px-4 sm:px-6 py-[.6rem] text-primary font-semibold bg-white hover:bg-white/90 rounded-lg sm:mt-8 mt-4"
              >
                Chat Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
