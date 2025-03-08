import { Link, NavLink } from "react-router-dom";
import { AuthComponent } from "./auth-component";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  const linkStyles = "uppercase font-bold hover:bg-[#202329] hover:text-white";
  const activeLink = "text-gray-500";

  return (
    <div className="flex justify-between items-center bg-white font-black text-[#202329] p-5 mb-2">
      <Link to="/">
        <img src={logo} alt="ricky&morty logo" />
      </Link>
      <div className="w-lg h-10 flex justify-around items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? `${linkStyles} ${activeLink}` : linkStyles
          }
          to="/characters"
        >
          characters
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${linkStyles} ${activeLink}` : linkStyles
          }
          to="/episodes"
        >
          episode
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${linkStyles} ${activeLink}` : linkStyles
          }
          to="/locations"
        >
          location
        </NavLink>
        <AuthComponent />
      </div>
    </div>
  );
};
