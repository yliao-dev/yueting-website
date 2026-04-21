import { Link } from "react-router-dom";
import { RiArrowUpDoubleFill } from "react-icons/ri";

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
      <div className="footer__inner">
        <button
          type="button"
          className="footer__backToTop"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <RiArrowUpDoubleFill />
        </button>

        <div className="footer__info">
          <p className="footer__eyebrow">Forged through code, Kendo, and travel</p>
          <h2>
            <span
              className="footer__copyright"
              title={`Last updated: ${formattedDate}`}
            >
              &copy; {today.getFullYear()} Yueting Liao |{" "}
              <Link to="/contact">Contact</Link>
            </span>
          </h2>
          <p className="footer__updated">Last updated: {formattedDate}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
