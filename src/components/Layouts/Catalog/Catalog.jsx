import { Banner } from "./Banner";
import { BannerCoverflow } from "./BannerCoverflow";
import { Row } from "./Row";

export const Catalog = () => {
  return (
    <div>
      <section className="section hidden md:block">
        <div className="w-full h-full pt-[4rem]">
          <BannerCoverflow />
        </div>
      </section>
      <section className="w-full block md:hidden">
        <div className="w-full pt-[4rem] px-2">
          <Banner />
        </div>
      </section>

      <section className="w-screen my-16">
        <div className="max-w-7xl mx-auto">
          <Row
            title="3D Poster"
            rowID={1}
            fetchURL={"3dposter.json"}
            toAll={
              "https://www.tokopedia.com/motionime/etalase/poster-3d-motion"
            }
          />
        </div>
      </section>
      <section className="w-screen my-16">
        <div className="max-w-7xl mx-auto">
          <Row
            title="3D Sticker"
            rowID={2}
            fetchURL={"3dsticker.json"}
            toAll={
              "https://www.tokopedia.com/motionime/etalase/sticker-3d-motion"
            }
          />
        </div>
      </section>
      <section className="w-screen my-16">
        <div className="max-w-7xl mx-auto">
          <Row
            title="3D Keychain"
            rowID={3}
            fetchURL={"3dkeychain.json"}
            toAll={
              "https://www.tokopedia.com/motionime/etalase/keychain-3d-motion"
            }
          />
        </div>
      </section>
    </div>
  );
};
