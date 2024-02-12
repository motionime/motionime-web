import { useState } from "react";
import { Tabs, TabPanel, TabList, Tab } from "react-tabs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { Hero } from "./Hero";
import { TabData } from "./Tabs/TabData";

const tabNavItem = [
  {
    title: "Staff Roles",
    text: "First Human, Moderator, Guardian.",
  },
  {
    title: "Level Roles",
    text: "Art Enjoyer, Pict Perms, Art Love, and more.",
  },
  {
    title: "Honorable Roles",
    text: "Family, Creator, Pro Player, Ex JKT48, and more.",
  },
  {
    title: "Game Catalog",
    text: "RPG, FPS, MOBA, Minecraft, Rhythm, and more.",
  },
  {
    title: "Public Catalog",
    text: "Cosplay, Fashion, Idol, Horror, Drama Korea, and more.",
  },
  {
    title: "Minigame Bot Catalog",
    text: "Idle Miner, Epic RPG, Pokemon, and more.",
  },
];

export const Role = () => {
  const [activeTab, setActiveTab] = useState(0);

  function handleActiveTab(index) {
    setActiveTab(index);
  }

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 250;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 250;
  };
  return (
    <>
      <Hero />

      <section className="w-screen min-h-fit bg-neutral-950 py-16">
        <div className="max-w-6xl mx-auto w-full h-full text-white">
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
                        className={`hidden lg:block py-4 hover:border-r-motion_ime_purple hover:border-r-4 ${
                          index === activeTab
                            ? "border-l-motion_ime_purple border-l-4 px-2"
                            : "px-3"
                        }`}
                      >
                        <p className="font-semibold text-xl">{tab.title}</p>
                        <p className="opacity-60">{tab.text}</p>
                      </div>
                      {/* end of tab nav buat desktop */}

                      {/* tab nav buat mobile */}

                      <div
                        className={`border-2 border-motion_ime_purple lg:hidden px-4 py-2 rounded-full font-semibold ${
                          index === activeTab &&
                          "bg-motion_ime_purple text-white"
                        }`}
                      >
                        {tab?.title}
                      </div>
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

            <div className="h-fit">
              <TabPanel>
                <TabData />
              </TabPanel>
              <TabPanel>
                <TabData />
              </TabPanel>
              <TabPanel>
                <TabData />
              </TabPanel>
              <TabPanel>
                <TabData />
              </TabPanel>
              <TabPanel>
                <TabData />
              </TabPanel>
              <TabPanel>
                <TabData />
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
      {/* <section className="section bg-neutral-950">yy</section> */}
    </>
  );
};
