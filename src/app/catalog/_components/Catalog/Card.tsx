import { TCatalog } from "@/app/_components/_types";
import { rupiah } from "@/utils/currency";
import { minimizeString } from "@/utils/string";

type CardProps = {
  item: TCatalog;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ item, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={`w-[240px] h-[360px] inline-block relative p-2 ${props.className}`}
    >
      <div className="w-full h-full rounded p-1 shadow-md">
        <div className="w-full h-[60%] rounded overflow-hidden">
          <img
            className="w-full h-full aspect-square bg-primary hover:scale-110"
            src={item?.image}
            alt={item?.title}
            loading="lazy"
          />
        </div>
        <div className="w-full h-[40%] p-0.5 flex flex-col relative">
          <div className="whitespace-break-spaces">
            <p>{minimizeString(item?.title, 44)}</p>
          </div>
          <p className="font-bold my-2">{rupiah(item?.price)}</p>
          <div className="w-full absolute bottom-0 left-0">
            <a
              href={item?.link}
              rel="noopener noreferrer"
              target="_blank"
              className="w-full inline-flex items-center justify-center px-4 py-2 text-base font-semibold whitespace-nowrap leading-6 bg-white border border-motion_ime_purple text-motion_ime_purple rounded shadow-sm hover:bg-motion_ime_purple hover:text-white focus:outline-none focus:shadow-none"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
