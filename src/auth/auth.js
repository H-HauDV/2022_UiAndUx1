import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("isLogin")
      ? JSON.parse(localStorage.getItem("isLogin"))
      : null
  );

  useEffect(() => {
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }, [isLogin]);

  // call this function when you want to authenticate the user
  const login = async () => {
    setIsLogin(true);
  };

  // call this function to sign out logged in user
  const logout = () => {
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
