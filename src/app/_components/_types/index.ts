import { TFounder } from "@/data/founder";

export type NeedToChange = any;

export type ParentComponentProps = {
  children: React.ReactNode;
};

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

export type RowProps = {
  title: string;
  fetchURL: string;
  rowID: number;
};

export type TBanner = {
  image: string;
  title: string;
  link: string;
};

export type TCatalog = TBanner & {
  price: number;
};
