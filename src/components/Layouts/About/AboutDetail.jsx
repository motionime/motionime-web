import { useContext } from "react";
import { CursorContext } from "../../../context/CursorContext";
import { MotionImeLink } from "../../Elements/MotionIme";

export const AboutDetail = ({ total }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const data = [
    {
      title: "The Bocil's of Death",
      text: total || "...",
    },
    {
      title: "Forum's",
      text: "50+",
    },
    {
      title: "Guardian's",
      text: "40+",
    },
    {
      title: "Event's",
      text: "15+",
    },
  ];
  return (
    <>
      <div
        className="grid md:grid-cols-4 grid-cols-2 gap-4 text-center font-bold px-2 place-items-center"
        data-aos="fade-up"
      >
        {data?.map((item, index) => {
          return (
            <div key={index}>
              <p className="sm:text-5xl text-4xl">{item.text}</p>
              <span className="text-grey text-lg">{item.title}</span>
            </div>
          );
        })}
      </div>

      <div data-aos="fade-up" data-aos-delay="500">
        <div
          className="text-center mb-8 px-2"
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <div className="max-w-sm mx-auto font-semibold flex flex-col gap-4 mb-8">
            <h1 className="sm:text-2xl text-xl">
              What <span className="font-motion_ime">Motion</span> Do
            </h1>
            <p className="text-grey sm:text-3xl text-2xl">
              We Played And Grew Into The Bocil of Death
            </p>
          </div>
          <p className="max-w-4xl mx-auto text-black">
            At <MotionImeLink isCapital />, we introduce imaginative solutions
            through imaginative technology. Not simply that, we also provide an
            online community that is unrivaled through the Discord platform,
            with over {total || "..."} members making it the largest and most
            active community in Indonesia.
          </p>
        </div>
      </div>
    </>
  );
};
