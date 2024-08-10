import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFetch, setIsFetch] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const context = {
    isSidebarOpen,
    toggleSidebar,
    isFetch,
    setIsFetch,
  };

  return (
    <DashboardContext.Provider value={context}>
      {children}
    </DashboardContext.Provider>
  );
};
