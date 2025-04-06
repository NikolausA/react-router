import { createContext, ReactNode, useContext, useState } from "react";

interface IAuthContextValue {
  user: User | null;
  signin: (newUser: User, cb: () => void) => void;
  signout: (cb: () => void) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  name: string;
  nik?: string;
  email: string;
  password: string;
}

const AuthContext = createContext<IAuthContextValue>({
  user: null,
  signin: () => {},
  signout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser || storedUser === "undefined") {
      return null;
    }
    try {
      return JSON.parse(storedUser);
    } catch (error) {
      console.error("Failed to parse user data from localStorage:", error);
      return null;
    }
  });

  const signin = (newUser: User, cb: () => void) => {
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
    cb();
  };

  const signout = (cb: () => void) => {
    setUser(null);
    localStorage.removeItem("user");
    cb();
  };

  const value = {
    user,
    signin,
    signout,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};
