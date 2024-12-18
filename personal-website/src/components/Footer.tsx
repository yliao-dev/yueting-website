import React from "react";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h2 className="footer__text">&copy; 2024 Yueting Liao.</h2>
      <div className="footer__icons">
        <LinkedIn />
        <Email />
        <GitHub />
      </div>
    </footer>
  );
};

export default Footer;
