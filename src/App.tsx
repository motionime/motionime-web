import "./assets/styles/global.css";
import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "./utils/motion";

import {
  AboutPage,
  CatalogPage,
  EventDetailPage,
  EventPage,
  GGPage,
  HomePage,
  NotFoundPage,
  RolePage,
  SupportPage,
} from "./pages (react)";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial={true} mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/event/:title" element={<EventDetailPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/role" element={<RolePage />} />
          <Route path="/gg" element={<GGPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
