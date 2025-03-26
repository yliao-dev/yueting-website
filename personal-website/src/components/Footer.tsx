import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="footer">
        <div className="footer__arrow" onClick={scrollToTop}>
          <ChevronUp />
        </div>

        <div className="footer__info">
          <h2>
            &copy; 2025 Yueting Liao | <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
