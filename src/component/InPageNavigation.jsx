import React, { useState } from "react";
import logo from "../assets/logo/LOGO5.png";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Expertise from "../pages/skills/Expertise";
import Portfolio from "../pages/portfolio/Portfolio";
import Footer from "../pages/Footer/Footer";
import { Link } from "react-router-dom";
import "./InPageNavigation.css";
import ScrollToTopButton from "./ScrollToTopButton";

const InPageNavigation = () => {
  // Function to handle smooth scrolling
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close the dropdown menu after navigating
    setMenuOpen(false);
  };

  // State to track if the dropdown menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="navbar bg-[#1f242d] text-white md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            {menuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                {/* Section 1 Button */}
                <li>
                  <p
                    onClick={() => smoothScrollTo("section1")}
                    className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
                  >
                    Home
                  </p>
                </li>

                {/* Section 2 Button */}
                <li>
                  <p
                    onClick={() => smoothScrollTo("section2")}
                    className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
                  >
                    About Me
                  </p>
                </li>

                {/* Section 3 Button */}
                <li>
                  <p
                    onClick={() => smoothScrollTo("section3")}
                    className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
                  >
                    Skills
                  </p>
                </li>

                {/* Section 4 Button */}
                <li>
                  <p
                    onClick={() => smoothScrollTo("section4")}
                    className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
                  >
                    Portfolio
                  </p>
                </li>

                {/* Section 5 Button */}
                {/* <li>
                  <p
                    onClick={() => smoothScrollTo("section5")}
                    className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
                  >
                    Resume
                  </p>
                </li> */}

                {/* Section 6 Button */}
                <li>
                  <p
                    onClick={() => smoothScrollTo("section5")}
                    className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
                  >
                    Contact Me
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white rounded-full ">
            <img className="md:w-14 w-12" src={logo} alt="Logo" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* Section 1 Button */}
            <li>
              <p
                onClick={() => smoothScrollTo("section1")}
                className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
              >
                Home
              </p>
            </li>

            {/* Section 2 Button */}
            <li>
              <p
                onClick={() => smoothScrollTo("section2")}
                className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
              >
                About Me
              </p>
            </li>

            {/* Section 3 Button */}
            <li>
              <p
                onClick={() => smoothScrollTo("section3")}
                className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
              >
                Skills
              </p>
            </li>

            {/* Section 4 Button */}
            <li>
              <p
                onClick={() => smoothScrollTo("section4")}
                className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
              >
                Portfolio
              </p>
            </li>

            {/* Section 6 Button */}
            <li>
              <p
                onClick={() => smoothScrollTo("section5")}
                className="cursor-pointer hover:text-sky-300 hover:text-brand-color transition-all tracking-wider text-lg font-medium"
              >
                Contact Me
              </p>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link target="black" to="#" className="btn">
            Resume
          </Link>
        </div>
      </div>
      {/* Sections */}
      <div id="section1">
        <Home />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <Expertise />
      </div>
      <div id="section4">
        <Portfolio />
      </div>
      <div id="section5">
        <Footer />
      </div>

      {/* Add ScrollToTopButton */}
      <ScrollToTopButton />
    </div>
  );
};

export default InPageNavigation;
