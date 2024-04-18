import { useContext } from "react";
import * as Accordion from "@radix-ui/react-accordion";

import { AccordionContent, AccordionTrigger } from "../../Elements/Accordion";

import { TotalMemberContext } from "../../../context/TotalMemberContext";
import { generalFAQ as generalFAQData } from "../../../data";

export const GeneralFAQ = () => {
  const { total } = useContext(TotalMemberContext);

  const generalFAQ = [
    {
      question: "Apa itu Motion Ime?",
      answer: `Motion ime adalah penyedia merchandise berteknologi 3D imaging pertama, mulai dari poster, stiker, gantungan kunci. Tidak hanya itu, kami juga menyediakan komunitas online yang tak tertandingi melalui platform Discord, dengan lebih dari ${total} anggota yang menjadikannya komunitas terbesar dan teraktif di Indonesia.`,
    },
    ...generalFAQData,
  ];

  return (
    <section className="w-screen h-auto my-16">
      <div className="max-w-7xl h-full mx-auto pt-2">
        <div className="lg:grid grid-flow-col grid-cols-[minmax(0,40%)_minmax(0,60%)] gap-8">
          <div className="h-fit mb-8 px-2">
            <h2 id="faq" className="lg:text-4xl text-2xl font-semibold lg:mb-4">
              General FAQs
            </h2>
            <p className="text-sm sm:text-base">
              Semua yang perlu Anda ketahui tentang{" "}
              <span className="font-motion_ime">Motion Ime</span>. Tidak dapat
              menemukan jawaban?{" "}
              <a
                className="underline"
                href="https://discord.com/invite/motionime"
              >
                Chat dengan tim kami.
              </a>
            </p>
          </div>
          <div>
            <Accordion.Root type="multiple">
              {generalFAQ?.map((item, index) => {
                return (
                  <Accordion.Item className="p-2" value={index + 1} key={index}>
                    <AccordionTrigger>{item?.question}</AccordionTrigger>
                    <AccordionContent>{item?.answer}</AccordionContent>
                    <hr className="my-4 border rounded" />
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  );
};
