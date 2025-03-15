import React from "react";
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="page__gradient-white" />
      <footer className="footer">
        <div className="footer__arrow" onClick={scrollToTop} />
        <h2>&copy; 2025 Yueting Liao.</h2>
      </footer>
    </>
  );
};

export default Footer;
