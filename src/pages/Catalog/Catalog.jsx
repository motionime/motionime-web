import {
  Navbar,
  Catalog as CatalogLayouts,
  Footer,
} from "../../components/Layouts";

export const Catalog = () => {
  return (
    <>
      <Navbar className="text-primary" />
      <CatalogLayouts />
      <Footer className="bg-inherit" />
    </>
  );
};
