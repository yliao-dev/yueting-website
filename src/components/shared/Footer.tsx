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
      <button className="navigation-arrow footer-arrow" onClick={scrollToTop}>
        &#10094;
      </button>

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
