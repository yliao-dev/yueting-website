import React from "react";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Yueting Liao. </p>
      <div className="footer__icons">
        <LinkedIn />
        <Email />
        <GitHub />
      </div>
    </footer>
  );
};

export default Footer;
