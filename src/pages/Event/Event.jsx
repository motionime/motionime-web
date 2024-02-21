import {
  Navbar,
  Footer,
  Event as EventLayouts,
} from "../../components/Layouts";

export const Event = () => {
  return (
    <div className="bg-neutral-950 text-white">
      <Navbar />
      <EventLayouts />
      <Footer className="bg-inherit" />
    </div>
  );
};
