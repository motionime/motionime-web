import { v4 as uuidv4 } from "uuid";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const generateDummyData = (val: number) => {
  const data = [];
  for (let i = 0; i < val; i++) {
    const id = uuidv4();
    data.push({ id });
  }
  return data;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function scrollTo(x = 0, y = 69) {
  // x for scrollX
  // y for scrollY, default value 69 for testing
  return window.scroll(x, y);
}
