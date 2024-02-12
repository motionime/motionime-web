import { transition } from "../../../config/transition.config";

import { useContext } from "react";

import { motion } from "../../../utils/motion";
import { getWidth } from "../../../utils/screen";

import { TotalMemberContext } from "../../../context/TotalMemberContext";

import { AboutHero } from "./AboutHero";
import { AboutCarousel } from "./AboutCarousel";
import { AboutDetail } from "./AboutDetail";

import { MotionTeam, MotionStory, MotionJoin } from "../";

export const About = () => {
  const width = getWidth();
  const { total } = useContext(TotalMemberContext);

  return (
    <motion.div
      // 1024 === lg
      initial={{ opacity: 0, y: `${width > 1024 ? "100%" : ""}` }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition}
    >
      <AboutHero />
      <section className="mb-32">
        <div className="max-w-[1280px] mx-auto w-full h-full text-white">
          <div className="text-motion_ime_purple md:pt-16 pt-8 w-full flex flex-col gap-24">
            <AboutDetail total={total} />
          </div>
        </div>

        <div
          className="max-w-[1400px] mx-auto px-2"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <AboutCarousel />
        </div>
      </section>
      <MotionStory />
      <MotionTeam />
      <MotionJoin />
    </motion.div>
  );
};
