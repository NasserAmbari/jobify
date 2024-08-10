import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import Cookies from "js-cookie";
import gsap from "gsap";
import { GlobalContext } from "../context/global";

import MainLogo from "../assets/logo.svg";

const navigation = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/find-jobs",
    name: "Find Jobs",
  },
  {
    path: "/login",
    name: "Post a Job",
    showWhenLoggedOut: true,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    showWhenLoggedIn: true,
  },
  {
    path: "/logout",
    name: "Logout",
    showWhenLoggedIn: true,
  },
];

const Navbar = () => {
  const { handleLogout } = useContext(GlobalContext);

  gsap.registerPlugin(useGSAP);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const listNav = useRef([]);
  const logo = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      listNav.current,
      {
        y: "30",
      },
      {
        y: "0",
        ease: "power2.in",
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      logo.current,
      {
        y: "40",
      },
      {
        y: "0",
        ease: "power2.in",
        duration: 1,
      }
    );
  }, []);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 p-4 md:p-8 sticky top-0 bg-t-white z-10 mx-auto max-w-screen-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center overflow-hidden">
          <img ref={logo} src={MainLogo} className="h-8" alt="Flowbite Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            isMenuOpen
              ? "w-full md:block md:w-auto"
              : "hidden w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul className="flex flex-col gap-8 p-4 md:p-0 mt-4 rounded-lg md:flex-row md:mt-0 md:border-0">
            {navigation.map((item, index) => {
              if (
                (Cookies.get("token") && !item.showWhenLoggedOut) ||
                (!Cookies.get("token") && !item.showWhenLoggedIn)
              ) {
                return (
                  <li key={index} className="overflow-hidden">
                    <Link
                      ref={(elm) => {
                        listNav.current[index] = elm;
                      }}
                      to={item.name === "Logout" ? "" : item.path}
                      className="md:p-0"
                      onClick={
                        item.name === "Logout" ? handleLogout : undefined
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
