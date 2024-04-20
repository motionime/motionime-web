"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { RowProps } from "@/app/_components/_types";
import { MI_API_BASE_URL } from "@/config/motionime-api.config";
import { Card } from "./Card";
import { useCursorContext } from "@/context/CursorContext";

export const Row = ({ title, fetchURL, rowID }: RowProps) => {
  const [data, setData] = useState([]);
  const cursor = useCursorContext();

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID) as HTMLElement;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID) as HTMLElement;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const getEvent = useCallback(async () => {
    try {
      const response = await (
        await axios.get(`${MI_API_BASE_URL}/${fetchURL}`)
      ).data;
      setData(response?.results);
    } catch (error) {}
  }, [fetchURL]);

  useEffect(() => {
    getEvent();
  }, [getEvent]);
  return (
    <>
      {data?.length ? (
        <div className={`${!data?.length && "hidden"}`}>
          <h2
            className="text-white font-semibold md:text-2xl px-2 py-4"
            onMouseEnter={cursor?.mouseEnterHandler}
            onMouseLeave={cursor?.mouseLeaveHandler}
          >
            {title}
          </h2>
          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={slideLeft}
              className="bg-white text-primary lg:-left-[20px] left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
            <div
              id={"slider" + rowID}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative rounded"
            >
              {data?.map((item, id) => (
                <Card key={id} item={item} inHover="hover:bg-neutral-950/80" />
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              className="bg-white text-primary lg:-right-[20px] right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-full animate-pulse py-4 px-2">
          <div className="sm:w-48 w-32 h-8 rounded bg-gray-600 mb-4"></div>
          <div className="h-[240px] sm:h-[280px] lg:h-[320px] rounded grid grid-flow-col gap-x-4 pt-2 overflow-hidden">
            <div className="w-[180px] sm:w-[220px] lg:w-[260px] h-full rounded bg-gray-600"></div>
            <div className="w-[180px] sm:w-[220px] lg:w-[260px] h-full rounded bg-gray-600"></div>
            <div className="w-[180px] sm:w-[220px] lg:w-[260px] h-full rounded bg-gray-600"></div>
            <div className="w-[180px] sm:w-[220px] lg:w-[260px] h-full rounded bg-gray-600"></div>
            <div className="w-[140px] sm:w-[180px] lg:w-[220px] h-full rounded bg-gray-600"></div>
          </div>
        </div>
      )}
    </>
  );
};
