"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { MI_API_BASE_URL } from "@/config/motionime-api.config";
import { getWidth } from "@/utils/screen";
import { generateDummyData } from "@/utils";
import { TBanner } from "@/app/_components/_types";
import Image from "next/image";

export const BannerCoverflow = () => {
  const [banner, setBanner] = useState<TBanner[]>([]);
  const width = getWidth();
  const dummyBanner = generateDummyData(6);

  const getBanner = useCallback(async () => {
    try {
      if ((width as number) < 768) return 0;
      const response = await (
        await axios.get(`${MI_API_BASE_URL}/banner-catalog.json`)
      ).data;
      setBanner(response?.results);
    } catch (error) {}
  }, [width]);

  useEffect(() => {
    getBanner();
  }, [getBanner]);
  return (
    <>
      {banner?.length ? (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full h-full select-none"
        >
          {banner?.map((item, index) => {
            return (
              <SwiperSlide className="max-w-[37rem] max-h-[42rem]" key={index}>
                <Link target="_blank" href={item?.link}>
                  <div className="w-full h-full group cursor-pointer">
                    <div className="w-full h-full">
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        width={500}
                        height={500}
                        className="w-full h-full rounded-xl box-reflect-below"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div className="absolute inset-0 flex translate-y-[45%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                      <h1 className="text-l font-bold text-white">
                        {item?.title}
                      </h1>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full h-full select-none"
        >
          {dummyBanner?.map(({ id }) => {
            return (
              <SwiperSlide className="max-w-[37rem] max-h-[42rem]" key={id}>
                <div className="w-full h-full animate-pulse">
                  <div className="w-full h-full bg-gray-600 rounded-xl"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </>
  );
};
