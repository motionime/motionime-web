import { useContext } from "react";
import { ParticlesFireworks } from "../../components/Elements/Particles";
import { TotalMemberContext } from "../../context/TotalMemberContext";
import gg from "../../assets/img/gg/wb-dance.gif";

export const GG = () => {
  const { total } = useContext(TotalMemberContext);
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
            Congratulations <span>{total || "..."}</span> members.
          </p>
        </div>
        <div className="w-60 overflow-hidden rounded-lg">
          <img
            src={gg}
            alt="gg"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
