import { useLocation, useNavigate } from "react-router-dom";
import { SigninForm } from "../../components/signin-form";
import { Credentials } from "../../types/credentials";
import { useAuth } from "../../context/AuthProvider";

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from || "/";
  const handleSubmit = (credentials: Credentials) => {
    if (auth) {
      auth.signin(credentials, () => {
        navigate(from, { replace: true });
      });
    }
  };
  return (
    <div className="bg-[#202329] mx-auto my-0 border-2 border-amber-50 p-5 rounded-xl">
      <h2 className="uppercase font-medium">Login</h2>
      <SigninForm onSubmit={handleSubmit} />
    </div>
  );
};
