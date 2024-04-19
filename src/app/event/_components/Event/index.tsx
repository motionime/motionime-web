"use client";
import { Ads } from "./Ads";
import { Banner } from "./Banner";
import { Row } from "./Row";

export default function Event() {
  return (
    <div>
      <section className="section">
        <div className="w-full h-full overflow-hidden">
          <Banner />
        </div>
      </section>

      <section className="w-screen my-16">
        <div className="max-w-7xl mx-auto">
          <Row title="Trending Now" rowID={1} fetchURL={"event.json"} />
        </div>
      </section>

      <section className="w-screen my-16">
        <div className="max-w-7xl mx-auto">
          <Ads />
        </div>
      </section>
    </div>
  );
}
