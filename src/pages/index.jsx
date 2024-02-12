import { useDocumentTitle } from "../hooks/useDocumentTitle";

import { Home } from "./Home/Home";
import { NotFound } from "./NotFound/NotFound";
import { About } from "./About/About";
import { Event } from "./Event/Event";
import { EventDetail } from "./Event/EventDetail";
import { useContext } from "react";
import { EventTitleContext } from "../context/EventTitleContext";
import { Catalog } from "./Catalog/Catalog";
import { Support } from "./Support/Support";
import { Role } from "./Role/Role";
import { GG } from "./GG";

import { Cursor } from "../components/Elements/Cursor";

// custom title
function Page({ children }) {
  return <>{children}</>;
}

function HomePage() {
  return (
    <Page
      children={
        <>
          <Home />
          <Cursor />
        </>
      }
    />
  );
}
function AboutPage() {
  useDocumentTitle("about motion ime");
  return (
    <Page
      children={
        <>
          <About />
          <Cursor />
        </>
      }
    />
  );
}
function EventPage() {
  useDocumentTitle("motion ime activity");
  return <Page children={<Event />} />;
}
function EventDetailPage() {
  const { title } = useContext(EventTitleContext);

  useDocumentTitle(`${title ? title : "..."} | motion ime activity`);
  return <Page children={<EventDetail />} />;
}
function CatalogPage() {
  useDocumentTitle("motion catalog");
  return <Page children={<Catalog />} />;
}
function SupportPage() {
  useDocumentTitle("motion support");
  return <Page children={<Support />} />;
}
function RolePage() {
  useDocumentTitle("motion role");
  // return <Page children={<Role />} />;
  return <Page children={<DevPage />} />;
}
function GGPage() {
  useDocumentTitle("motion ime is the best community ever");
  return <Page children={<GG />} />;
}

function NotFoundPage() {
  useDocumentTitle("motion not found");
  return <Page children={<NotFound />} />;
}

// for pages under construction
function DevPage() {
  return (
    <section className="section flex items-center justify-center">
      <div className="text-center">
        <p>This Page Is Under Construction.</p>
        <button
          onClick={() => window.history.back()}
          className="text-motion_ime_purple font-semibold text-lg"
        >
          &#8592; Back
        </button>
      </div>
    </section>
  );
}

export {
  HomePage,
  NotFoundPage,
  AboutPage,
  EventPage,
  EventDetailPage,
  CatalogPage,
  SupportPage,
  RolePage,
  GGPage,
};
