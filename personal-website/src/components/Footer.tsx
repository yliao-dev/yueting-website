import React from "react";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Yueting Liao. </p>
      <LinkedIn />
      <Email />
      <GitHub />
    </footer>
  );
};

export default Footer;
