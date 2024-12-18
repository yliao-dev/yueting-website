import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const AboutLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AboutLayout;
