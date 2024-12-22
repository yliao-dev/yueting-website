import React from "react";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";

interface SocialMediaIconsProps {
  orientation: "horizontal" | "vertical"; // Define the prop for orientation
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ orientation }) => {
  return (
    <div className={`social-media-icons ${orientation}`}>
      <a
        href="https://www.linkedin.com/in/yueting-liao-83b216171/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn className="linkedin-icon" />
      </a>
      <a
        href="https://www.instagram.com/_yuetingl/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="instagram-icon" />
      </a>
      <a
        href="https://github.com/yliao-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub className="github-icon" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
