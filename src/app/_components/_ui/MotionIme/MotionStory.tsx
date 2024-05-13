import { getWidth } from "@/utils/screen";

export const MotionStory = () => {
  const width = getWidth();
  return (
    <section
      className="w-screen h-[80vh] bg-[url(/img/about/jaya.jpg)] bg-cover bg-left overflow-auto bg-black/40"
      data-aos="fade-up"
      data-aos-delay="1000"
    >
      <div className="max-w-[1280px] mx-auto w-full h-full text-white sm:pt-24 pt-12 px-2 z-10 backdrop-blur-sm">
        <div className="max-w-[960px] mx-auto">
          <h1 className="sm:text-5xl text-3xl font-semibold mb-10">
            Motion Story
          </h1>
          <div className="flex flex-col sm:gap-y-6 gap-y-4">
            <p>
              In the year 2023, Motion Ime was born from the extraordinary
              imagination of two talented young men: Windah Basudara and Rio
              Djaja. A project that started as a fun idea, with strong
              determination, Motion ime embarked on a challenging journey,
              directing their focus on merchandise products based on unique 3D
              imaging technology.
            </p>
            <p>
              From 3D posters that bring images to life to 3D stickers that
              bring new dimensions, as well as 3D keychains that give a magical
              touch to every key used. Each Motion ime product tells a story of
              imaginative technology that pushes the boundaries of the visual
              world.
            </p>
            <p className={`${(width as number) < 919 ? "hidden" : ""}`}>
              Di tahun 2023, Motion Ime lahir dari imajinasi luar biasa dua
              pemuda berbakat: Windah Basudara dan Rio Djaja. Sebuah proyek yang
              berawal dari ide iseng, dengan tekad yang kuat, Motion Ime memulai
              perjalanan yang menantang, mengarahkan fokus mereka pada produk
              merchandise berbasis teknologi pencitraan 3D yang unik.
              <br /> <br />
              Dari poster 3D yang menghidupkan gambar hingga stiker 3D yang
              menghadirkan dimensi baru, serta gantungan kunci 3D yang memberi
              sentuhan magis pada setiap kunci yang digunakan. Setiap produk
              Motion ime menceritakan kisah tentang teknologi imajinatif yang
              mendorong batasan-batasan dunia visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
