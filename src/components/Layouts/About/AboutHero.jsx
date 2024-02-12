import { useContext } from "react";

import { CursorContext } from "../../../context/CursorContext";

import stackedBG from "../../../assets/img/about/stacked.svg";
import { getWidth } from "../../../utils/screen";
import { MotionImeLink } from "../../Elements/MotionIme";

export const AboutHero = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const width = getWidth();

  return (
    <section className="w-screen h-[120vh] relative">
      {/* bg */}
      <div className="w-screen h-[120vh] overflow-hidden absolute -z-10 bg-neutral-950">
        <img
          src={stackedBG}
          alt="stackedBG"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* end of bg */}

      <div className="max-w-[1280px] mx-auto w-full h-full text-white flex">
        <div
          className="lg:w-[40%] sm:w-[60%] w-[90%] px-2 sm:mt-72 mt-36 h-max"
          data-aos="fade-up-right"
          data-aos-delay={width > 1024 ? "1200" : "500"}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <h1 className="lg:text-4xl md:text-[2.75rem] text-3xl font-bold mb-4">
            The First Provider of 3D Imaging Technology Merchandise in Indonesia
          </h1>
          <p>
            Established in 2023,{" "}
            <MotionImeLink isCapital className="text-grey" /> is the first
            provider of 3D imaging technology merchandise, starting from
            posters, stickers, keychains. 3D Posters are a popular and unique
            choice for Home Decor, as they can add excitement to any room and
            are a brilliant way to showcase your favorite photos or artwork.
          </p>
        </div>
      </div>
    </section>
  );
};
