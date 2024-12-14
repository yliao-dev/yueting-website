import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "active-link" : "inactive-link";

  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <NavLink className="logo" to="/">
        <img className="logo-img" src={logo} />
      </NavLink>
      <div className="nav-links">
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
    </nav>
  );
};

export default Navbar;
