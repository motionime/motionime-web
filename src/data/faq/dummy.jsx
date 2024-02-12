import tapi_boong from "../../assets/img/faq/dummy/tapi-boong.gif";

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
        <img src={tapi_boong} alt="tapi boong meme" loading="lazy" />
      </>
    ),
  },
];
