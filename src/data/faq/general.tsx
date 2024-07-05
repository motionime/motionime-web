import { socialsMenu } from "../social";

import Image from "next/image";

export const generalFAQ = [
  {
    question: "Kapan Motion Ime terbentuk?",
    answer:
      "Di tahun 2023, Motion ime lahir dari imajinasi luar biasa dua pemuda berbakat: Windah Basudara dan Rio Djaja.",
  },
  {
    question: "Siapa Jaya Esport sebenarnya?",
    answer:
      "Menurut majalah Om Bram, Jaya Esport adalah sekumpulan orang yang datang dari masa depan, yang datang dengan tujuan untuk menyelamatkan para dino dari kepunahan.",
  },
  {
    question: "Siapa Windah Basudara sebenarnya?",
    answer:
      'Windah Basudara merupakan seorang konten kreator Indonesia. Tidak hanya itu Windah Basudara atau dikenal Brando juga merupakan seorang Raja dari "Bocil Kematian".',
  },
  {
    question: "Bagaimana cara membeli produk Motion Ime?",
    answer: (
      <>
        <p className="mb-2">
          Kalian bisa kunjungi{" "}
          <a href="/catalog" className="text-motion_ime_purple font-semibold">
            Catalog
          </a>{" "}
          atau bisa lewat link official Motion Ime. Account yang tidak
          tertera/sesuai dengan link di bawah ini sangat jelas adalah penipuan!
        </p>
        <ul>
          {socialsMenu.map((social, index) => {
            return (
              <li key={index} className="flex gap-1 items-center">
                <span className="text-lg">
                  <social.icon />
                </span>
                :{" "}
                <a
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-motion_ime_purple font-semibold"
                >
                  {social.title}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    ),
  },
  {
    question: "Bagaimana cara gabung discord Motion Ime?",
    answer: (
      <>
        Dengan klik tombol <strong>Join Now</strong> di halaman{" "}
        <a href="/" className="text-motion_ime_purple font-semibold">
          Home
        </a>{" "}
        atau klik{" "}
        <a
          href="https://discord.com/invite/motionime"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          disini!
        </a>
      </>
    ),
  },
  {
    question: "Apakah gabung discord Motion Ime berbayar?",
    answer:
      "Motion Ime memperbolehkan siapa pun untuk bergabung, Team Motion Ime sama sekali tidak memungut biaya apapun, jika ada informasi bahwa Motion Ime memerlukan biaya untuk bergabung itu adalah penipuan!",
  },
  {
    question:
      "Apa yang harus dilakukan jika baru pertama kali gabung Motion Ime?",
    answer:
      "Tidak ada hal yang spesifik untuk dilakukan, tapi alangkah baiknya untuk membaca rules dan mengambil role terlebih dahulu! Jika kalian para Motion Imers bingung bagaimana cara ambil role, kalian bisa scroll ke bawah.",
  },
];

export const generalTabFAQ = [
  {
    question: "Bagaimana cara ambil/claim role di discord Motion Ime?",
    answer: (
      <>
        <ol className="list-decimal flex flex-col gap-y-4 pl-4">
          <li>Pertama kalian sudah gabung di discord Motion Ime.</li>
          <li>
            <p>
              Kedua kalian buka server Motion Ime, di sisi kiri/sidebar kalian
              klik text channel select-roles di channel list GET STARTED seperti
              gambar dibawah, atau kalian bisa klik{" "}
              <a
                href="https://discord.com/channels/1097910193779650580/1110236052075073628"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                disini!
              </a>
            </p>
            <Image
              src={"/img/faq/start-channel.png"}
              width={300}
              height={300}
              alt="start channel"
              loading="lazy"
            />
          </li>
          <li>
            <p>Selanjutnya, kalian bisa melihat list role yang tersedia,</p>
            <Image
              src={"/img/faq/role-catalog.png"}
              width={300}
              height={300}
              alt="role catalog"
              loading="lazy"
            />
          </li>
          <li>
            <p>
              Dan kalian sudah bisa memilih/mengklaim role sesuai interest
              kalian, dengan mengklik menu/dropdown seperti gambar dibawah!
            </p>
            <Image
              src={"/img/faq/role-mini.png"}
              width={300}
              height={300}
              alt="role mini"
              loading="lazy"
            />
          </li>
          <li>
            <p>
              Jika muncul message dari bot Motion Ime seperti gambar dibawah,
              berarti role yang kalian claim/ambil sudah berhasil. Setelah
              berhasil, dengan otomatis channel list akan muncul sesuai role
              yang kalian pilih sebelumnya. Kalian bisa cek di sisi kiri/sidebar
              kalian!
            </p>
            <Image
              src={"/img/faq/role-claimed.png"}
              width={300}
              height={300}
              alt="role claimed"
              loading="lazy"
            />
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "Role apa aja yang bisa diclaim di discord Motion Ime?",
    answer: (
      <>
        Cukup banyak role yang bisa diclaim di Motion Ime. Seperti :
        <ul className="list-disc pl-5">
          <li>Game Catalog</li>
          <li>Public Catalog</li>
          <li>Public Catalog 2</li>
          <li>Notification Catalog</li>
          <li>Gender Catalog</li>
          <li>dan masih banyak yang lainnya.</li>
        </ul>
        Untuk melihat lebih lengkapnya role apa saja yang bisa diclaim, bisa
        klik{" "}
        <a href="/role" className="underline font-semibold">
          disini!
        </a>
      </>
    ),
  },
  {
    question: "Tips dalam memilih role",
    answer:
      "Tidak ada batasan untuk mengambil/mengclaim role, tetapi alangkah baiknya pilih sesuai dengan keinginan/interest masing-masing. Karena jika kalian para Motion Imers memilih banyak role, akan memberatkan discord kalian sendiri.",
  },
  {
    question: "Apa itu Guardian?",
    answer:
      "Menurut Kamus , arti kata Guardian = Penjaga/Pelindung. Seperti artinya Guardian memiliki wewenang untuk mengambil keputusan terhadap pelanggaran member, mulai dari timeout/kick bahkan ban. Guardian merupakan Staff Roles / Pengurus Server Motion Ime yang langsung dipilih oleh Lord Windah Basudara/Jaya Esport/Bang Morries itu sendiri.",
  },
  {
    question: "Bagaimana cara menjadi Guardian di Motion Ime?",
    answer: "Berusaha dan Berdoa.",
  },
];
