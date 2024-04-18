export type TBanner = {
  image: string;
  title: string;
  link: string;
};

export type TCatalog = TBanner & {
  price: number;
};
