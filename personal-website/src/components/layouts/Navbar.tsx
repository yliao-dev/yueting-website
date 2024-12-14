import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "active-link" // Define active link style in CSS
      : "inactive-link"; // Define inactive link and hover styles in CSS

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <NavLink className="logo" to="/">
            <img className="logo-img" src={logo} />
          </NavLink>

          {/* Links */}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
