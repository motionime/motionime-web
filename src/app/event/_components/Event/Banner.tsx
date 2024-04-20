"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MI_API_BASE_URL } from "@/config/motionime-api.config";
import { beautyPath, minimizeString } from "@/utils/string";
import { getWidth } from "@/utils/screen";
import { scrollTo } from "@/utils";

import { ButtonEvent } from "@/app/_components/_ui/Button";
import { TBannerEvent } from "@/components/Layouts/Event/type";
import { useCursorContext } from "@/context/CursorContext";

export const Banner = () => {
  const [banner, setBanner] = useState<TBannerEvent[]>([]);
  const cursor = useCursorContext();
  const width = getWidth();

  const getBanner = useCallback(async () => {
    const response = await (
      await axios.get(`${MI_API_BASE_URL}/banner-event.json`)
    ).data;
    setBanner(response?.results);
  }, []);

  useEffect(() => {
    getBanner();
  }, [getBanner]);
  return (
    <>
      {banner?.length ? (
        <Swiper
          spaceBetween={30}
          effect={"cards"}
          loop={true}
          navigation={(width as number) >= 1024 ? true : false}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Navigation, Pagination, Autoplay]}
          className="w-full h-full select-none"
        >
          {banner?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
                  className="w-full h-full cursor-pointer"
                  href={beautyPath(item?.title)}
                  onClick={() => scrollTo(0, 0)}
                >
                  <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
                  <Image
                    className="w-full h-full object-cover object-center bg-primary"
                    src={item?.image}
                    alt={item?.title}
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  <div className="absolute w-full top-[20%] p-4 md:p-8 lg:py-16 lg:px-24">
                    <h1
                      className="text-3xl md:text-5xl font-bold hover:cursor-text"
                      onMouseEnter={cursor?.mouseEnterHandler}
                      onMouseLeave={cursor?.mouseLeaveHandler}
                    >
                      {item?.title}
                    </h1>
                    <p
                      className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-4 mb-8 hover:cursor-text"
                      onMouseEnter={cursor?.mouseEnterHandler}
                      onMouseLeave={cursor?.mouseLeaveHandler}
                    >
                      {minimizeString(item?.overview, 150)}
                    </p>
                    <ButtonEvent
                      onMouseEnter={cursor?.mouseEnterHandler}
                      onMouseLeave={cursor?.mouseLeaveHandler}
                      text={`${
                        item?.type === "play" ? "Watch Now" : "Check Now"
                      }`}
                      link={item?.link}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="w-full h-full animate-pulse">
          <div className="w-full h-full bg-gray-600"></div>
        </div>
      )}
    </>
  );
};
