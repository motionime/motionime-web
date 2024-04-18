"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import { getWidth } from "@/utils/screen";
import { MI_API_BASE_URL } from "@/config/motionime-api.config";
import { TBanner } from "./type";

export const Banner = () => {
  const [banner, setBanner] = useState<TBanner[]>([]);
  const width = getWidth();

  const getBanner = useCallback(async () => {
    try {
      if (width >= 768) return 0;
      const response = await (
        await axios.get(`${MI_API_BASE_URL}/banner.json`)
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
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="w-full h-full select-none"
        >
          {banner?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-full h-full aspect-video cursor-pointer">
                  <div className="absolute w-full h-full bg-gradient-to-r from-black/20"></div>
                  <img
                    className="w-full h-full object-cover object-center bg-primary rounded"
                    src={item?.image}
                    alt={item?.title}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="w-full h-full aspect-video animate-pulse">
          <div className="w-full h-full bg-gray-600 rounded"></div>
        </div>
      )}
    </>
  );
};
