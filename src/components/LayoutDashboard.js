import { Sidebar } from "./";
import { useContext } from "react";
import { DashboardContext } from "../context/dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LayoutDashboard = ({ children }) => {
  const { toggleSidebar } = useContext(DashboardContext);
  return (
    <div className="flex">
      <Sidebar />

      <div className="min-h-screen w-full">
        <div className="flex justify-between shadow-xl py-4 px-4 md:px-8 bg-[#216A80] text-white">
          <div className="avatar">Ahmad Nasser Ambari</div>
          <div className="block lg:hidden" onClick={toggleSidebar}>
            <FontAwesomeIcon icon="fa-bars" />
          </div>
        </div>

        <div className="p-4 md:p-8">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
