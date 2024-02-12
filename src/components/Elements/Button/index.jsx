import { Link } from "react-router-dom";

export const ButtonJoinNow = ({ className, where, ...props }) => {
  return (
    <>
      {where === "hero" ? (
        <a
          href="https://discord.com/invite/motionime"
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-block text-lg group ${className}`}
          {...props}
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-motion_ime_purple">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-motion_ime_purple"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Join Now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      ) : (
        <a
          href="https://discord.com/invite/motionime"
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-block px-4 py-2 font-medium group ${className}`}
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Join Now
          </span>
        </a>
      )}
    </>
  );
};

export const ButtonEvent = ({
  text = "Watch Now",
  className,
  link = "https://discord.com/invite/motionime",
}) => {
  const c = className;
  return (
    <Link
      className={`rounded-md bg-white px-6 py-[.6rem] text-primary font-semibold hover:bg-neutral-200 ${c}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
      to={link}
      target="_blank"
    >
      {text}
    </Link>
  );
};
