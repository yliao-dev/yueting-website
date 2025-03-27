import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import favicon from "../assets/icons/favicon.png";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => setExpandNavbar(false), [location]);
  // Toggle Navbar for mobile view
  const toggleNavbar = () => setExpandNavbar((prev) => !prev);
  // Generate class based on active status
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "navbar__link--active" : "navbar__link--inactive";

  const navItems = ["portfolio", "gallery", "blog", "contact"];

  return (
    <>
      <nav className="navbar" id={expandNavbar ? "open" : "close"}>
        <NavLink className="logo" to="/">
          <img className="navbar__logo" src={favicon} alt="logo" />
        </NavLink>

        <div className="navbar__links">
          {navItems.map((item) => (
            <NavLink key={item} to={`/${item}`} className={linkClass}>
              <h2>{item.toUpperCase()}</h2>
            </NavLink>
          ))}
        </div>

        <div className="navbar__toggle-button">
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </nav>

      {expandNavbar && (
        <div className={`navbar__dropdown-links ${expandNavbar ? "show" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <NavLink to={`/${item}`} className={linkClass}>
                  <span className="navbar__dropdown-text">
                    {item.toUpperCase()}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
