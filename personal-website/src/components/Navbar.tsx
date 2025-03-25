import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import ReorderIcon from "@mui/icons-material/Reorder";
const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "navbar__link--active" : "navbar__link--inactive";

  const [expandNavbar, setExpandNavbar] = useState(false);
  const toggleNavbar = () => {
    setExpandNavbar((prev) => !prev);
  };
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <>
      <nav className="navbar" id={expandNavbar ? "open" : "close"}>
        <NavLink className="logo" to="/">
          <img className="navbar__logo" src={logo} />
        </NavLink>
        <div className="navbar__links">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => linkClass({ isActive })}
          >
            PORTFOLIO
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => linkClass({ isActive })}
          >
            GALLERY
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) => linkClass({ isActive })}
          >
            BLOG
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => linkClass({ isActive })}
          >
            CONTACT
          </NavLink>
        </div>
        <div className="navbar__toggle-button">
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </nav>

      {expandNavbar && (
        <div className="navbar__dropdown-links">
          <ul>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => linkClass({ isActive })}
              >
                <span>PORTFOLIO</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) => linkClass({ isActive })}
              >
                <span>GALLERY</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => linkClass({ isActive })}
              >
                <span>BLOG</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => linkClass({ isActive })}
              >
                <span>CONTACT</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
