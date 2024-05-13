import * as Accordion from "@radix-ui/react-accordion";
import { BsChevronDown } from "react-icons/bs";

import { cn } from "@/utils";
import { ParentComponentProps } from "../../_types";

export const AccordionTrigger = ({
  children,
  ...props
}: ParentComponentProps & React.HTMLProps<HTMLDivElement>) => {
  return (
    <Accordion.Header>
      <Accordion.Trigger
        className={cn(
          "flex justify-between items-center gap-4 w-full font-semibold text-left transition-[transform_300ms_cubic-bezier(0.87,_0,_0.13,_1)] open:theme(colors.motion_ime_purple) open:transform-rotate-180",
          props.className,
        )}
      >
        <p>{children}</p>
        <BsChevronDown size={20} className="TriggerIcon" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export const AccordionContent = ({
  children,
  ...props
}: ParentComponentProps & React.HTMLProps<HTMLDivElement>) => {
  return (
    <Accordion.Content
      {...props}
      className={cn("pt-2 pb-4 overflow-hidden", props.className)}
    >
      <div>{children}</div>
    </Accordion.Content>
  );
};
