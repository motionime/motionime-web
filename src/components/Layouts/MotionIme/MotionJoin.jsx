import { useContext } from "react";

import { ButtonJoinNow } from "../../Elements/Button";
import { CursorContext } from "../../../context/CursorContext";

import mockup_motion from "../../../assets/img/about/mockup-motion.png";
import { MotionImeText } from "../../Elements/MotionIme";

export const MotionJoin = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <section
      className="w-screen lg:h-[90vh] from-[#e6d7ff] to-[#caadff] bg-gradient-to-b overflow-auto"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <div className="max-w-5xl mx-auto px-2 w-full h-full lg:py-24 md:py-16 py-8">
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-8">
          <div
            className="w-full h-full flex justify-center lg:col-span-2 rounded"
            data-aos="zoom-in-up"
            data-aos-delay="1000"
          >
            <img
              src={mockup_motion}
              alt="mockup_motion"
              className="lg:w-full lg:h-[550px] md:w-[300px] md:h-[500px] w-[200px] h-[350px] object-cover object-center hover:-rotate-3 hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div
            className="flex flex-col justify-center lg:col-span-4 py-4"
            data-aos="zoom-in-down"
            data-aos-delay="1000"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <p className="text-motion_ime_purple font-bold">
              Halo, Motion Imers.
            </p>
            <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2">
              Have you already joined <MotionImeText />?
            </h1>
            <p className="mb-8">
              Join <MotionImeText isCapital /> now and be part of something
              greater than the digital realm. Unleash your excitement, exchange
              insights, and journey alongside individuals who celebrate your
              every triumph. Here, passions unite, and dreams take flight.
              Elevate your online presence – strive to become a Guardian - your
              adventure begins with <MotionImeText isCapital exclamationMarks />
            </p>

            <ButtonJoinNow
              className={"w-[200px] text-center mx-auto sm:mx-0"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
