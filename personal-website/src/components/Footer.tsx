import React from "react";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer__text">&copy; 2024 Yueting Liao.</h2>
      <div className="footer__icons">
        <a
          href="https://www.linkedin.com/in/yueting-liao-83b216171/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>

        <Email />
        <a
          href="https://github.com/yliao-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
