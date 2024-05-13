import Image from "next/image";

export const otherFAQ = [
  {
    question: "Bagaimana cara pesan/chat di discord jadi berwarna?",
    answer: (
      <>
        <Image
          src={"/img/faq/other/color-chat.pn"}
          alt="color chat"
          loading="lazy"
        />
        <p>
          Ini sebenarnya fitur discord untuk mengshare sintaks code bahasa
          program. Tapi untuk seru-seruan oke juga.
        </p>
        <br />
        <p>
          Caranya dengan menggunakan blok kode [```] (Backtick dibawah tombol
          Esc keyboard kalian).
        </p>
        <Image
          src={"/img/faq/other/chat-js.png"}
          alt="chat js"
          loading="lazy"
        />
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
        <Image
          src={"/img/faq/other/chat-yaml.png"}
          alt="chat yaml"
          loading="lazy"
        />
        <p>
          Hasil nya pun berbeda dengan js tadi, warna tulisan nya juga tidak
          sama.
        </p>
        <Image
          src={"/img/faq/other/chat-yaml-result.png"}
          alt="chat yaml result"
          loading="lazy"
        />
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
