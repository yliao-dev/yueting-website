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
      <div className="navigation-arrow">
        <button onClick={scrollToTop}>
          <RiArrowUpDoubleFill />
        </button>
      </div>

      <div className="footer__info">
        <h2>
          <span
            className="footer__copyright"
            title={`Last updated: ${formattedDate}`}
          >
            &copy; {today.getFullYear()} Yueting Liao |{" "}
            <Link to="/contact">Contact</Link>
          </span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
