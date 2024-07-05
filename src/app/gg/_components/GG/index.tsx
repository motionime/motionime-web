"use client";

import { ParticlesFireworks } from "@/app/_components/_ui/Particles";
import { useTotalMemberContext } from "@/context/TotalMemberContext";
import Image from "next/image";

export const GG = () => {
  const member = useTotalMemberContext();
  return (
    <section className="section bg-neutral-950 absolute -z-10">
      <ParticlesFireworks />
      <div className="max-w-4xl mx-auto w-full h-full text-white flex flex-col gap-4 px-2 items-center justify-center select-none">
        <div className="w-full text-center">
          <h1>
            <span className="font-motion_ime">Motion Ime</span> is the best
            community ever.
          </h1>
          <p>
            Congratulations <span>{member?.total || "..."}</span> members.
          </p>
        </div>
        <div className="w-60 overflow-hidden rounded-lg">
          <Image
            src={"/img/gg/wb-dance.gif"}
            alt="gg"
            width={500}
            height={500}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
