"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

import { transition } from "@/config/transition.config";
import { useTotalMemberContext } from "@/context/TotalMemberContext";
import { useCursorContext } from "@/context/CursorContext";
import { MotionImeText } from "@/app/_components/_ui/MotionIme/MotionImeText";
import { ButtonJoinNow } from "../_ui/Button";

const motionWords = [
  "Game",
  "Music",
  "Friend",
  "Hobbies",
  "Sport",
  "Creator",
  "Cosplay",
  "Idol",
  "Anime",
  "Movie",
  "Manga",
  "Drakor",
  "Hoyoverse",
  "Rhythm",
  "Fashion",
  "TCG",
  "etc.",
];

export const Hero = () => {
  const [text] = useTypewriter({
    words: motionWords,
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 140,
  });
  const cursor = useCursorContext();
  const member = useTotalMemberContext();
  let heroVideo: HTMLVideoElement | null = null;
  if (typeof document !== "undefined") {
    heroVideo = document.getElementById("heroVideo") as HTMLVideoElement;
  }

  function playVid() {
    if (heroVideo) {
      heroVideo.play();
    }
  }

  function pauseVid() {
    if (heroVideo) {
      heroVideo.pause();
    }
  }

  return (
    <motion.section
      className="section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      {/* hero background */}
      <div className="w-screen h-screen overflow-hidden absolute -z-10 bg-neutral-950">
        <video
          id="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src="/img/hero/hero.mp4" />
        </video>
      </div>
      {/* end of hero background */}
      {/* content hero */}
      <div className="max-w-[1280px] mx-auto w-full h-full pt-24 flex text-white">
        <div className="w-full flex justify-center items-center">
          <motion.div
            onMouseEnter={cursor?.mouseEnterHandler}
            onMouseLeave={cursor?.mouseLeaveHandler}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition}
            className="text-center"
          >
            <p className="text-motion_ime_purple font-bold mb-6 text-xl">
              Welcome Bocil Kematian
            </p>

            <h1 className="lg:text-6xl md:text-[2.75rem] px-2 text-4xl font-bold">
              Let's play and grow with{" "}
              {/* <span className="font-motion_ime">motion ime!</span> */}
              <MotionImeText exclamationMarks />
            </h1>
            <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-4">
              Find your{" "}
              <>
                {text}
                <span className="text-motion_ime_purple">
                  <Cursor />
                </span>
              </>{" "}
              interest!
            </p>

            <p className="lg:text-2xl text-lg font-bold text-gray-400 lg:w-[65%] md:w-[80%] w-[95%] mx-auto mb-10 px-1">
              <MotionImeText isCapital /> is a discord community with over{" "}
              {member?.total || "..."} members. Let's join to become the bocil
              of death.
            </p>
            <ButtonJoinNow
              hero
              onMouseEnter={pauseVid}
              onMouseLeave={playVid}
            />
          </motion.div>
        </div>
      </div>
      {/* end of content hero */}
    </motion.section>
  );
};
