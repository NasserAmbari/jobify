import { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLogo from "../assets/logo.svg";
import { DashboardContext } from "../context/dashboard";
import { GlobalContext } from "../context/global";

const Sidebar = () => {
  const { toggleSidebar, isSidebarOpen } = useContext(DashboardContext);
  const { handleLogout } = useContext(GlobalContext);

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
          <Link to="/dashboard" className="text-lg">
            <FontAwesomeIcon icon="fa-xmark" />
            List Job
          </Link>

          <Link to="/dashboard/create-a-job" className="text-lg">
            Create Job
          </Link>

          <Link to="/dashboard/profile" className="text-lg">
            Profile
          </Link>
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
