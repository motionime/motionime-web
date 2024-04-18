import {
  Navbar,
  Support as SupportLayouts,
  Footer,
} from "../../components/Layouts";

export const Support = () => {
  return (
    <>
      <Navbar className="text-primary" />
      <SupportLayouts />
      <Footer className="bg-inherit" />
    </>
  );
};
