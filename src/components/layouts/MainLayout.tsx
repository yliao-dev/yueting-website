import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../shared/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
