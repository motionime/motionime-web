import { Footer } from "@/app/_components/_ui/Footer";
import { EventDetail } from "./_components/EventDetail";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-[#000300] text-white">
      <EventDetail slug={params.slug} />
      <Footer className="bg-inherit" />
    </div>
  );
}
