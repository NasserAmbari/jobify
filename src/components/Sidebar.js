import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLogo from "../assets/logo.svg";
import { DashboardContext } from "../context/dashboard";
import { GlobalContext } from "../context/global";

const navigation = [
  {
    link: "/dashboard",
    name: "Job List",
    icon: "fa-list",
  },
  {
    link: "/dashboard/create-a-job",
    name: "Create a Job",
    icon: "fa-plus",
  },
  {
    link: "/dashboard/profile",
    name: "Profile",
    icon: "fa-user",
  },
];

const Sidebar = () => {
  const { toggleSidebar, isSidebarOpen } = useContext(DashboardContext);
  const { handleLogout } = useContext(GlobalContext);
  let location = useLocation();

  return (
    <aside
      className={`fixed inset-y-0 left-0  top-0 z-30 w-80 bg-white shadow-lg lg:sticky lg:translate-x-0 transform max-h-screen
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full p-4 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <img src={MainLogo} className="w-20" alt="mainlogo" />
            <div className="block lg:hidden" onClick={toggleSidebar}>
              <FontAwesomeIcon icon="fa-xmark" />
            </div>
          </div>
          <hr className="my-4" />

          {navigation.map((data, idx) => {
            return (
              <Link to={data.link} className="text-lg" key={idx}>
                <div
                  className={`flex gap-2 content-cente p-4 rounded-lg  hover:bg-[#216A80] hover:text-white
                  ${
                    location.pathname === data.link
                      ? "bg-[#216A80] text-white"
                      : location
                  }`}
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={data.icon}
                      className="content-center"
                    />
                  </div>
                  <p>{data.name}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <div>
          <hr className="my-4" />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
