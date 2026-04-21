import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => setExpandNavbar(false), [location]);

  const toggleNavbar = () => setExpandNavbar((prev) => !prev);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "navbar__link--active" : "navbar__link--inactive";

  const navItems = ["portfolio", "gallery", "thoughts", "contact"];

  return (
    <>
      <nav className="navbar">
        <NavLink className="logo" to="/" aria-label="Yueting Liao home">
          <img className="navbar__logo" src="/logo.svg" alt="Logo" />
          <div className="navbar__brand">
            <span className="navbar__brand-name">Yueting Liao</span>
            <span className="navbar__brand-tag">Code / Kendo / Lens</span>
          </div>
        </NavLink>

        <div className="navbar__links">
          {navItems.map((item) => (
            <NavLink key={item} to={`/${item}`} className={linkClass}>
              <span className="navbar__link-text">{item}</span>
            </NavLink>
          ))}
        </div>

        <div className="navbar__toggle-button">
          <button
            type="button"
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <CiMenuFries />
          </button>
        </div>
      </nav>

      {expandNavbar && (
        <div className="navbar__dropdown-links show">
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <NavLink to={`/${item}`} className={linkClass}>
                  <span className="navbar__dropdown-text">
                    {item}
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
