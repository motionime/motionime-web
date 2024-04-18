"use client";

import { motion } from "framer-motion";

import { transition } from "@/config/transition.config";
import { getWidth } from "@/utils/screen";
import { useTotalMemberContext } from "@/context/TotalMemberContext";
import { Hero } from "./Hero";
import { Detail } from "./Detail";
import { Carousel } from "./Carousel";
import { MotionStory } from "@/app/_components/_ui/MotionIme/MotionStory";
import { MotionTeam } from "@/app/_components/_ui/MotionIme/MotionTeam";
import { MotionJoin } from "@/app/_components/_ui/MotionIme/MotionJoin";

export const About = () => {
  const width = getWidth();
  const context = useTotalMemberContext();

  return (
    <motion.div
      // 1024 === lg
      initial={{ opacity: 0, y: `${(width as number) > 1024 ? "100%" : ""}` }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <Hero />
      <section className="mb-32">
        <div className="max-w-[1280px] mx-auto w-full h-full text-white">
          <div className="text-motion_ime_purple md:pt-16 pt-8 w-full flex flex-col gap-24">
            <Detail total={context?.total as string} />
          </div>
        </div>

        <div
          className="max-w-[1400px] mx-auto px-2"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <Carousel />
        </div>
      </section>
      <MotionStory />
      <MotionTeam />
      <MotionJoin />
    </motion.div>
  );
};
