"use client";

import { motion } from "framer-motion";

import { Ads } from "./Ads";
import { Banner } from "./Banner";
import { Row } from "./Row";
import { transition } from "@/config/transition.config";

export default function Event() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: 0 }}
      transition={transition}
    >
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
    </motion.div>
  );
}
