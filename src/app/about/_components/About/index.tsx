"use client";
import { motion } from "framer-motion";

import { transition } from "@/config/transition.config";
import { useTotalMemberContext } from "@/context/TotalMemberContext";
import { Hero } from "./Hero";
import { Detail } from "./Detail";
import { Carousel } from "./Carousel";
import { MotionStory } from "@/app/_components/_ui/MotionIme/MotionStory";
import { MotionTeam } from "@/app/_components/_ui/MotionIme/MotionTeam";
import { MotionJoin } from "@/app/_components/_ui/MotionIme/MotionJoin";
import { Footer } from "@/app/_components/_ui/Footer";

export const About = () => {
  const context = useTotalMemberContext();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
      <Footer className="bg-gradient-to-b from-[#caadff] to-[#e6d7ff] to-55%" />
    </motion.div>
  );
};
