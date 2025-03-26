import { LinkedIn, GitHub, Instagram } from "@mui/icons-material";
import DuolingoIcon from "../assets/icons/duolingo.svg";

const SocialMediaIcons = () => {
  return (
    <div className={`social-media-icons`}>
      <a
        href="https://github.com/yliao-dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub className="github-icon" />
      </a>

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
        href="https://www.duolingo.com/profile/YuetingLiao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={DuolingoIcon} alt="Duolingo Icon" className="duolingo-icon" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
