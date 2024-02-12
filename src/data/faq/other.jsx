import color_chat from "../../assets/img/faq/other/color-chat.png";
import chat_js from "../../assets/img/faq/other/chat-js.png";
import chat_yaml from "../../assets/img/faq/other/chat-yaml.png";
import chat_yaml_result from "../../assets/img/faq/other/chat-yaml-result.png";

export const otherFAQ = [
  {
    question: "Bagaimana cara pesan/chat di discord jadi berwarna?",
    answer: (
      <>
        <img src={color_chat} alt="color chat" loading="lazy" />
        <p>
          Ini sebenarnya fitur discord untuk mengshare sintaks code bahasa
          program. Tapi untuk seru-seruan oke juga.
        </p>
        <br />
        <p>
          Caranya dengan menggunakan blok kode [```] (Backtick dibawah tombol
          Esc keyboard kalian).
        </p>
        <img src={chat_js} alt="chat js" loading="lazy" />
        <p>
          Seperti gambar diatas, kalian harus menggunakan Backtick lalu
          menuliskan pesannya diantara blok kode [```].
        </p>
        <p>
          <span className="font-semibold">Maksud dari tulisan js itu apa?</span>{" "}
          js merupakan inisial bahasa pemrograman JavaScript, sesuai yang kita
          ketahui ini sebenarnya fitur discord untuk mengshare sintaks code
          bahasa program. Jadi setelah 3 Backtick pertama dibutuhkan inisial
          bahasa program apapun.
        </p>
        <br />
        <p>Kita coba ganti inisial-nya.</p>
        <img src={chat_yaml} alt="chat yaml" loading="lazy" />
        <p>
          Hasil nya pun berbeda dengan js tadi, warna tulisan nya juga tidak
          sama.
        </p>
        <img src={chat_yaml_result} alt="chat yaml result" loading="lazy" />
        <br />
        <p>
          <span className="font-semibold">
            Inisial apa saja yang kita bisa gunakan setelah 3 Backtick pertama?
          </span>{" "}
          Sangat banyak, hampir semua inisial bahasa program bisa, warna nya pun
          nanti akan beda-beda. Seperti :
        </p>
        <ul className="list-disc pl-5">
          <li>```bash</li>
          <li>```diff</li>
          <li>```py</li>
          <li>```md</li>
          <li>```css</li>
          <li>dan masih banyak yang lainnya.</li>
        </ul>
      </>
    ),
  },
];
