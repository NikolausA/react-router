import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const AuthComponent = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const name = auth.user?.name || "";

  const handleSignout = () => {
    auth.signout(() => {
      navigate("/");
    });
  };

  return (
    <div className="text-[#202329]">
      {name ? (
        <div className="flex cursor-pointer" onClick={handleSignout}>
          <div>{name}</div>
          <ArrowRightStartOnRectangleIcon className=" w-7 h-7" />
        </div>
      ) : (
        <Link to="/login">
          <ArrowRightEndOnRectangleIcon className=" w-7 h-7" />
        </Link>
      )}
    </div>
  );
};
