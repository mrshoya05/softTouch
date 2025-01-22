import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/Authcontext";
import { FaUserCircle, FaBell, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { auth, role, logout } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const nevigate = useNavigate();

  const handleClick = ()=>{
    nevigate('/profile');
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Skincare Dashboard
        </h1>
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="text-lg text-gray-700 hover:text-gray-900 transition"
              >
                Home
              </Link>
            </li>

            {auth && role === "Admin" && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-lg text-gray-700 hover:text-gray-900 transition"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="flex gap-4">
                  <FaBell className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                  <FaUserCircle className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="text-lg text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {auth && role === "User" && (
              <>
                <li>
                  <Link
                    to="/about"
                    className="text-lg text-gray-700 hover:text-gray-900 transition"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-lg text-gray-700 hover:text-gray-900 transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctor"
                    className="text-lg text-gray-700 hover:text-gray-900 transition"
                  >
                    Your Doctor
                  </Link>
                </li>
                <li className="flex gap-4">
                  <FaBell  className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                  <FaUserCircle 
                    onClick={handleClick}
                  className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="text-lg text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {auth && role === "Consultant" && (
              <>
                <li>
                  <Link
                    to="/my-consultant"
                    className="text-lg text-gray-700 hover:text-gray-900 transition"
                  >
                    My Consultant
                  </Link>
                </li>
                <li className="flex gap-4">
                  <FaBell className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                  <FaUserCircle className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="text-lg text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md transition"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!auth && (
              <li>
                <Link
                  to="/login"
                  className="text-lg text-gray-700 hover:text-gray-900 transition"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
//hello
export default Header;
//data update hello world