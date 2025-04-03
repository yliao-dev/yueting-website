import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <footer className="footer">
      <div className="footer__arrow" onClick={scrollToTop}>
        <ChevronUp />
      </div>

      <div className="footer__info">
        <h2>
          <span className="footer__copyright">
            &copy; {today.getFullYear()} Yueting Liao |{" "}
            <Link to="/contact">Contact</Link>
          </span>
          <span className="footer__updated">Last updated: {formattedDate}</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
