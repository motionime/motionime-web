import {
  Navbar,
  Footer,
  About as AboutLayouts,
} from "../../components/Layouts";

export const About = () => {
  return (
    <>
      <Navbar />
      <AboutLayouts />
      <Footer className="bg-gradient-to-b from-[#caadff] to-[#e6d7ff] to-55%" />
    </>
  );
};
