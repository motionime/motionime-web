"use client";

import axios from "axios";
import { useState, useCallback, useEffect } from "react";
import { Tooltip } from "react-tooltip";

import { MI_API_BASE_URL } from "@/config/motionime-api.config";
import { NeedToChange } from "@/app/_components/_types";

export const Ads = () => {
  const [ads, setAds] = useState<NeedToChange[]>([]);

  const getAds = useCallback(async () => {
    const response = await (
      await axios.get(`${MI_API_BASE_URL}/banner-ads.json`)
    ).data;
    setAds(response?.results);
  }, []);

  useEffect(() => {
    getAds();
  }, [getAds]);
  return (
    <>
      {ads?.length ? (
        <div className="w-full h-[600px] grid gap-2 overflow-hidden rounded">
          {ads?.map((item, index) => {
            return (
              <div
                key={index}
                className={`w-full h-full rounded overflow-hidden ${
                  !item?.image && "hidden"
                }`}
              >
                <a href={item?.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className="w-full h-full cursor-pointer bg-primary"
                    data-tooltip-id={item?.title}
                    loading="lazy"
                  />
                </a>
                <Tooltip
                  id={item?.title}
                  content={item?.title}
                  place={"bottom"}
                  style={{
                    padding: "2px 8px",
                  }}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full h-[600px] grid gap-2 overflow-hidden animate-pulse">
          <div className="w-full h-full bg-gray-600 rounded"></div>
          <div className="w-full h-full bg-gray-600 rounded"></div>
        </div>
      )}
    </>
  );
};
