"use client";

import * as Accordion from "@radix-ui/react-accordion";

import { NeedToChange } from "@/app/_components/_types";
import {
  AccordionContent,
  AccordionTrigger,
} from "@/app/_components/_ui/Accordion";

export const TabData = ({ data }: NeedToChange) => {
  return (
    <>
      <Accordion.Root type="single" collapsible>
        {data?.map((item: NeedToChange, index: number) => {
          return (
            <Accordion.Item
              className="p-2"
              value={`item-${index + 1}`}
              key={index}
            >
              <AccordionTrigger>{item?.question}</AccordionTrigger>
              <AccordionContent>{item?.answer}</AccordionContent>
              <hr className="my-4 border rounded" />
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </>
  );
};
