import Image from "next/image";

export const dummyFAQ = [
  {
    question: "Ini pertanyaan ceritanya",
    answer: "Dibuat untuk percobaan agar view terlihat bagus.",
  },
  {
    question: "Ini pertanyaan lagi ceritanya",
    answer: "Dibuat untuk percobaan agar view terlihat bagus.",
  },
  {
    question: "Ini pertanyaan beneran",
    answer: (
      <>
        <Image
          src={"/img/faq/dummy/tapi-boong.gif"}
          alt="tapi boong meme"
          loading="lazy"
        />
      </>
    ),
  },
];
