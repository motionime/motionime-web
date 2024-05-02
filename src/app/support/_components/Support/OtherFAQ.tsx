"use client";

import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { TabNavMobile } from "./Tabs/TabNavMobile";
import { TabData } from "./Tabs/TabData";

import { generalTabFAQ, gameFAQ, otherFAQ, dummyFAQ } from "../../../../data";

const tabNavItem = [
  {
    title: "General",
    text: "Role, Guardian, and more",
  },
  {
    title: "Game",
    text: "Minecraft, and more",
  },
  {
    title: "Other",
    text: "Tips, Tools, and more",
  },
  {
    title: "Dummy",
    text: "Dummy tab",
  },
];

const tabData = [
  {
    title: "General",
    data: generalTabFAQ,
  },
  {
    title: "Game",
    data: gameFAQ,
  },
  {
    title: "Other",
    data: otherFAQ,
  },
  {
    title: "Dummy",
    data: dummyFAQ,
  },
];

export const OtherFAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  function handleActiveTab(index: number) {
    setActiveTab(index);
  }

  const slideLeft = () => {
    var slider = document.getElementById("slider") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft - 250;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider") as HTMLElement;
    slider.scrollLeft = slider.scrollLeft + 250;
  };
  return (
    <section className="w-screen h-auto my-16">
      <div className="max-w-7xl h-full mx-auto pt-2 px-2">
        <h2 className="lg:text-4xl text-2xl font-semibold lg:mb-4">
          Other FAQs
        </h2>
        <div>
          <Tabs className="lg:grid grid-flow-col grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-8">
            <TabList className="h-fit flex lg:block relative items-center pl-8 lg:pl-0 pr-2 lg:pr-0 mb:8 py-4 lg:py-0 mb-4 lg:mb-0">
              <MdChevronLeft
                onClick={slideLeft}
                className="bg-white text-primary rounded-full opacity-80 hover:opacity-100 cursor-pointer z-10 absolute -left-2 lg:hidden"
                size={40}
              />
              <div
                className="w-full h-full overflow-x-scroll lg:overscroll-x-none whitespace-nowrap lg:whitespace-normal scroll-smooth scrollbar-hide rounded flex gap-2 lg:block"
                id="slider"
              >
                {tabNavItem?.map((tab, index) => {
                  return (
                    <Tab key={index} onClick={() => handleActiveTab(index)}>
                      {/* tab nav buat desktop */}
                      <div
                        className={`hidden lg:block px-2 py-4 hover:border-r-motion_ime_purple hover:border-r-4 ${
                          index === activeTab &&
                          "border-l-motion_ime_purple border-l-4"
                        }`}
                      >
                        <p className="font-semibold text-xl">{tab.title}</p>
                        <p>{tab.text}</p>
                      </div>
                      {/* end of tab nav buat desktop */}

                      {/* tab nav buat mobile */}
                      <TabNavMobile
                        tab={tab}
                        index={index}
                        activeTab={activeTab}
                      />
                      {/* end of tab nav buat mobile */}
                    </Tab>
                  );
                })}
              </div>
              <MdChevronRight
                onClick={slideRight}
                className="bg-white text-primary rounded-full opacity-80 hover:opacity-100 cursor-pointer z-10 absolute -right-2 lg:hidden"
                size={40}
              />
            </TabList>

            <div className="lg:relative lg:-top-14 h-fit">
              {tabData?.map((item, index) => {
                return (
                  <TabPanel key={index}>
                    <TabData data={item?.data} />
                  </TabPanel>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
