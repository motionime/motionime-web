import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

import { aboutData } from "@/data";

export const Carousel = () => {
  return (
    <Swiper
      freeMode={true}
      grabCursor={true}
      navigation={true}
      modules={[FreeMode, Navigation, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="rounded"
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
    >
      <>
        {aboutData?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="p-2">
              <div className="flex flex-col gap-y-2 shadow-xl w-[240px] h-[360px] p-2 rounded-lg mx-auto">
                <div className="w-full h-60 overflow-hidden rounded bg-primary">
                  <motion.img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full object-cover object-center aspect-square"
                    whileHover={{ scale: 1.1 }}
                    loading="lazy"
                  />
                </div>
                <div className="text-grey h-[120px] rounded overflow-hidden">
                  <p className="font-semibold text-xl">{item?.title}</p>
                  <p className="text-gray-500">{item?.text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};
