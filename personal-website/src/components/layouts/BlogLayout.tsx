import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const BlogLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />

      <Footer />
    </>
  );
};
export default BlogLayout;
