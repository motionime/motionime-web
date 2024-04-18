import heroVid from "../../../assets/img/role/hero.mp4";
import { LiaAngleDownSolid } from "react-icons/lia";
import { scrollTo as scrollToContent } from "../../../utils";

export const Hero = () => {
  return (
    <section className="section">
      <div className="w-screen h-screen overflow-hidden absolute -z-10 bg-white-950">
        <video
          id="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroVid} />
        </video>
        <div className="absolute w-full h-full shadow-[inset_0_35px_60px_-15px_rgba(0,0,0,0.69)] top-0 left-0"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full h-full flex justify-center items-center text-white relative">
        <div className="text-center px-2" data-aos="zoom-in">
          <h1 className="lg:text-6xl md:text-[2.75rem] text-4xl font-bold drop-shadow-[2px_-5px_2px_rgba(0,0,0,0.25)]">
            Find Your Roles
          </h1>
          <p className="sm:w-[80%] py-4 mx-auto drop-shadow-sm">
            Explore Roles, From Games to Your Favorite Hobbies, in Indonesia's
            Largest Community. At Motion Ime, We Provide Space for Your Every
            Interest - Your Roles are Unlimited - Express Yourself Freely and
            Unleash Yourself.
          </p>
        </div>

        <div className="absolute bottom-8">
          <LiaAngleDownSolid
            size={40}
            className="animate-bounce"
            // value y = 786 is where the content role is located.
            onClick={() => scrollToContent(0, 786)}
          />
        </div>
      </div>
    </section>
  );
};
