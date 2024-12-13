import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-[var(--primary-color)] border-b border-[var(--secondary-color)]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="Yueting Liao" />
              <span className="hidden md:block text-[var(--text-color)] text-2xl font-bold ml-2">
                Yueting Liao
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
