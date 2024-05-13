import Link from "next/link";
import Image from "next/image";

import { beautyPath } from "@/utils/string";
import { scrollTo } from "@/utils";
import { NeedToChange } from "@/app/_components/_types";

export const Card = ({
  item,
  inHover = "hover:bg-primary/80 ",
}: NeedToChange) => {
  return (
    <Link
      className="w-[200px] h-[260px] sm:w-[240px] sm:h-[300px] lg:w-[280px] lg:h-[340px] inline-block cursor-pointer relative p-2"
      href={`event/${beautyPath(item?.title)}`}
      onClick={() => scrollTo(0, 0)}
    >
      <div className="w-full h-full rounded overflow-hidden">
        <Image
          className="w-full h-full object-cover object-center bg-primary"
          src={item?.thumbnail}
          alt={item?.title}
          loading="lazy"
          width={280}
          height={340}
        />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 text-white rounded ${inHover}`}
      >
        <div className="w-full h-full flex justify-center items-center whitespace-break-spaces">
          <p className="text-sm lg:text-lg font-bold text-center px-2">
            {item?.title}
          </p>
        </div>
      </div>
    </Link>
  );
};
