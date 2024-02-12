import {
  Footer,
  Navbar,
  EventDetail as EventDetailLayouts,
} from "../../components/Layouts";

export const EventDetail = () => {
  return (
    <div className="bg-[#000300] text-white">
      <Navbar />
      <EventDetailLayouts />
      <Footer className="bg-inherit"/>
    </div>
  );
};
