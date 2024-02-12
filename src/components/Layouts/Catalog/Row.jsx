import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Card } from "./Card";
import { MI_API_BASE_URL } from "../../../config/motionime-api.config";
import { generateDummyData } from "../../../utils";

export const Row = ({ title, fetchURL, rowID, toAll }) => {
  const [data, setData] = useState([]);
  const dummyData = generateDummyData(6);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const getCatalog = useCallback(async () => {
    try {
      const response = await (
        await axios.get(`${MI_API_BASE_URL}/${fetchURL}`)
      ).data;
      setData(response?.results);
    } catch (error) {}
  }, [fetchURL]);

  useEffect(() => {
    getCatalog();
  }, [getCatalog]);
  return (
    <>
      {data?.length ? (
        <div className={`${!data?.length && "hidden"}`}>
          <div className="flex gap-4 items-center justify-between md:justify-normal px-2 py-4 font-semibold">
            <h2 className="text-2xl">{title}</h2>
            <Link to={toAll} target="_blank">
              <p className="text-motion_ime_purple">Lihat Semua</p>
            </Link>
          </div>
          <div className="relative flex items-center group">
            <MdChevronLeft
              onClick={slideLeft}
              className="bg-white text-primary lg:-left-[20px] left-0 rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
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
              className="bg-white text-primary lg:-right-[20px] right-0 rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
              size={40}
            />
          </div>
        </div>
      ) : (
        <div className="w-full h-full animate-pulse py-4 px-2">
          <div className="mb-4 flex gap-4 items-center justify-between md:justify-normal">
            <div className="sm:w-40 w-24 h-8 rounded-full bg-gray-600"></div>
            <div className="sm:w-16 w-12 h-4 rounded-full bg-gray-600"></div>
          </div>

          <div className="grid grid-flow-col gap-x-4 overflow-hidden w-full h-full">
            {dummyData.map(({ id }) => (
              <div
                className="w-[220px] h-[340px] rounded p-1 shadow-md bg-gray-600"
                key={id}
              >
                <div className="rounded w-full h-[60%] overflow-hidden bg-gray-300"></div>
                <div className="w-full h-[40%] py-2 flex flex-col relative">
                  <div className="w-full h-6 bg-gray-300 rounded-full"></div>
                  <div className="w-9/12 h-6 bg-gray-300 rounded-full mt-1"></div>
                  <div className="my-4 w-1/2 h-4 bg-gray-300 rounded-full"></div>
                  <div className="w-full h-8 rounded-full bg-gray-400 absolute bottom-0 left-0"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
