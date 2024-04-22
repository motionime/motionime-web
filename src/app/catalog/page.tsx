import { Footer } from "../_components/_ui/Footer";
import { Catalog } from "./_components/Catalog";

export default function page() {
  return (
    <>
      <Catalog />
      <Footer className="bg-inherit" />
    </>
  );
}
