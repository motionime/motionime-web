"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="section pt-[4rem]">
      <div className="absolute bottom-0 w-full h-full -z-10">
        <Image
          width={1920}
          height={1080}
          src="/img/support/bg-support.png"
          alt="bg support"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="max-w-7xl h-full mx-auto flex items-center justify-center">
        <div className="px-2" data-aos="fade-up">
          <div className="text-center">
            <p className="md:text-xl text-motion_ime_purple font-semibold">
              Welcome Motion Imers,
            </p>
            <p className="mt-6 mb-2 font-bold md:text-5xl text-2xl">
              You are in the right place
            </p>
            <p className="text-xs sm:text-sm md:mb-12 mb-8">
              If you need any help or have a question, we're here for you
            </p>
          </div>

          <div className="container px-2 mx-auto">
            <div className="ring-8 ring-white/30 rounded-full bg-white shadow flex w-full">
              <input
                type="text"
                placeholder="Any problems?"
                className="w-full rounded-tl-full rounded-bl-full py-2 md:py-4 px-4 text-sm focus:outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.keyCode === 13) {
                    e.preventDefault();
                    return (window.location.href = "#faq");
                  }
                }}
              />
              <button
                className="bg-gradient-to-r from-[#00D8FF] from-1% via-[#2C73FF] to-[#C801FF] sm:from-[#0046FF] sm:to-motion_ime_purple text-white rounded-tr-full rounded-br-full group py-2 sm:px-4 px-3"
                onClick={() => (window.location.href = "#faq")}
              >
                <p className="font-semibold text-base hover:opacity-75">
                  Search
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
