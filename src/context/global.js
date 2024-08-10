import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("profile");
    navigate("/");
  };

  const context = { handleLogout, profile, setProfile };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};
