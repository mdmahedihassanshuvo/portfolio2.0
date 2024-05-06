import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import logo from "../../assets/logo/LOGO5.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#1f242d]">
      <div className="px-4 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Name */}
        <div className="flex flex-col md:flex-row items-center md:gap-4">
          <div className="bg-white rounded-full p-1">
            <img className="md:w-20 w-12" src={logo} alt="Logo" />
          </div>
          <h2 className="text-white text-lg md:text-3xl font-semibold mt-2 md:mt-0">
            Md. Mahedi Hassan Shuvo
          </h2>
        </div>
        
        {/* Social Links */}
        <div className="mt-4 md:mt-0">
          <h4 className="text-white text-center md:text-left text-md font-medium">
            Connect with me
          </h4>
          <hr className="border-slate-500 my-2" />
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              to="#"
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="#"
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-slate-500" />
      <div className="text-center py-4 text-white text-xs md:text-sm">
        <p>Copyright © 2024 - All rights reserved by Md. Mahedi Hassan Shuvo</p>
      </div>
    </div>
  );
};

export default Footer;
