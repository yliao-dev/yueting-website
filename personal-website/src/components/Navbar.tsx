import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active-link" : "inactive-link";

  const [expandNavbar, setExpandNavbar] = useState(false);

  const toggleNavbar = () => {
    setExpandNavbar((prev) => !prev);
  };

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  // TODO: Dropdown toggle list, for everylink, add a row to the list
  return (
    <>
      <nav className="navbar" id={expandNavbar ? "open" : "close"}>
        <NavLink className="logo" to="/">
          <img className="logo-img" src={logo} />
        </NavLink>
        <div className="links">
          <NavLink
            to="/about"
            className={({ isActive }) => linkClass({ isActive })}
          >
            about
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => linkClass({ isActive })}
          >
            portfolio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => linkClass({ isActive })}
          >
            blog
          </NavLink>
        </div>

        <div className="toggleButton">
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </nav>

      {expandNavbar && (
        <div className="dropdown-links">
          <ul>
            <li>
              <NavLink to="/about" className="dropdown-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="dropdown-link">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="dropdown-link">
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
