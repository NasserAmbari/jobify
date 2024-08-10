import MainLogo from "../assets/logo.svg";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 border-t mx-auto max-w-screen-xl">
      <div className="logo">
        <img src={MainLogo} alt="jobify" className="w-32 mb-4" />
        <p>Find You Dream Jobs Here</p>
      </div>

      <ul className="flex flex-col gap-6">
        <li className="font-semibold">Directory</li>
        <li>Home</li>
        <li>Job Listing</li>
        <li>Explore Company</li>
        <li>About Us</li>
      </ul>

      <ul className="flex flex-col gap-6">
        <li className="font-semibold">For Job Seeker</li>
        <li>How to Create CV</li>
        <li>HR Tips</li>
        <li>Recruit</li>
        <li>Carrer Advice</li>
      </ul>

      <div className="flex flex-col gap-6">
        <h6 className="font-semibold">Address</h6>
        <div className="flex gap-2">
          <FontAwesomeIcon icon="fa-map" className="pt-1" />
          <p>Jl. Pandan Sari Tower Golden Brightest Complex</p>
        </div>
        <div className="flex gap-2">
          <FontAwesomeIcon icon="fa-phone" className="pt-1" />
          <p>+62 851 5842 6880</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
