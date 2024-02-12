import * as Accordion from "@radix-ui/react-accordion";
import { BsChevronDown } from "react-icons/bs";
import "./style.css";

export const AccordionTrigger = ({ children, ...props }) => {
  return (
    <Accordion.Header>
      <Accordion.Trigger
        className="flex justify-between items-center gap-4 w-full font-semibold AccordionTrigger text-left"
        {...props}
      >
        <p>{children}</p>
        <BsChevronDown size={20} className="TriggerIcon" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export const AccordionContent = ({ children, ...props }) => {
  return (
    <Accordion.Content className="pt-2 pb-4 overflow-hidden" {...props}>
      <div>{children}</div>
    </Accordion.Content>
  );
};
