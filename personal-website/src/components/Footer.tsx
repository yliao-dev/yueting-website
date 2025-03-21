import React from "react";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
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
          <span>&copy; 2025 Yueting Liao | </span>
          <span className="footer__links">
            <Link to="/contact">Contact</Link>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
