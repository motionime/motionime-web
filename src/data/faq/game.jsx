import mc_java from "../../assets/img/faq/game/mc-java.webp";
import mc_bedrock from "../../assets/img/faq/game/mc-bedrock.webp";

export const gameFAQ = [
  {
    question: "Apa IP Server Minecraft Windah Basudara",
    answer: (
      <ul className="list-disc pl-5 flex flex-col gap-y-4">
        <li>
          <p className="font-semibold">Java Edition</p>
          <p>IP: jayapuraindah.com</p>
          <img src={mc_java} alt="mc java" loading="lazy" />
        </li>
        <li>
          <p className="font-semibold">Bedrock/Pocket Edition</p>
          <p>Server Name: Jayapura Indah</p>
          <p>Server Adress: jayapuraindah.com </p>
          <p>Port: 25565</p>
          <img src={mc_bedrock} alt="mc bedrock" loading="lazy" />
        </li>
      </ul>
    ),
  },
  {
    question:
      "Apakah bisa crossplay Minecraft Java dan Minecraft Bedrock ataupun sebaliknya?",
    answer: "Untuk pertanyaan ini bisa cari di google aja, udah cape jawab.",
  },
];
