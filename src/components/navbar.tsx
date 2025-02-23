import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white font-black text-[#202329] p-5 mb-2">
      <Link to="/">
        <img src={logo} alt="ricky&morty logo" />
      </Link>
      <div className="w-lg h-10 flex justify-around items-center">
        <Link
          className="uppercase font-bold hover:bg-[#202329] hover:text-white"
          to="/characters"
        >
          characters
        </Link>
        <Link
          className="uppercase font-bold hover:bg-[#202329] hover:text-white"
          to="/episode"
        >
          episode
        </Link>
        <Link
          className="uppercase font-bold hover:bg-[#202329] hover:text-white"
          to="/location"
        >
          location
        </Link>
      </div>
    </div>
  );
};
