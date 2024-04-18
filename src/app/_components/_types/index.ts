import { TFounder } from "@/data/founder";

export type ButtonEventProps = React.HTMLProps<HTMLAnchorElement> & {
  text: string;
  link: string;
};

export type ButtonJoinNowProps = React.HTMLProps<HTMLAnchorElement> & {
  hero?: boolean;
};

export type MotionImeProps = React.HTMLProps<HTMLAnchorElement> & {
  exclamationMarks?: boolean;
  isCapital?: boolean;
};

export type AboutDetailProps = {
  total: string;
};

export type MotionTeamCardProps = {
  data: TFounder;
};
