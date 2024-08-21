import { Sidebar } from "./";
import { useContext } from "react";
import { DashboardContext } from "../context/dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const LayoutDashboard = ({ children }) => {
  const { toggleSidebar } = useContext(DashboardContext);
  const dataJson = Cookies.get("profile");
  const dataProfile = JSON.parse(dataJson);

  return (
    <div className="flex">
      <Sidebar />

      <div className="min-h-screen w-full">
        <div className="flex justify-between shadow-xl py-4 px-4 md:px-8 bg-[#216A80] text-white">
          <div className="avatar flex gap-4">
            <img
              src={dataProfile.image_url}
              className="aspect-square w-8 rounded-full"
              alt={dataProfile.name}
            />
            <div className="flex items-center">
              <p>Hallo, {dataProfile.name}</p>
            </div>
          </div>
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
