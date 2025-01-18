import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { FaUserCircle, FaBell } from "react-icons/fa"; // Example icons from react-icons

const Header = () => {
  const { auth, role, logout } = useAuth();  // Destructure both auth and role from the context

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-gray-800">Skincare Dashboard</h1>

        {/* Navigation Bar */}
        <nav>
          <ul className="flex items-center space-x-6">
            {/* Home Link */}
            <li>
              <Link
                to="/"
                className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
              >
                Home
              </Link>
            </li>

            {/* Conditional Links Based on Role */}
            {role === "admin" && (
              <>
                <li>
                  <Link
                    to="/menu"
                    className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
                  >
                    Dashboard
                  </Link>
                </li>
              </>
            )}

            {role === "user" && (
              <>
                <li>
                  <Link
                    to="/about"
                    className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctor"
                    className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
                  >
                    Doctor
                  </Link>
                </li>
              </>
            )}

            {role === "consultant" && (
              <li>
                <Link
                  to="/request"
                  className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
                >
                  Request
                </Link>
              </li>
            )}

            {/* Profile and Notification Icons */}
            {auth && (
              <li className="flex items-center space-x-4">
                <FaBell className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
                <FaUserCircle className="text-xl text-gray-700 hover:text-gray-900 cursor-pointer" />
              </li>
            )}

            {/* Logout Button */}
            {auth ? (
              <li>
                <button
                  onClick={logout}
                  className="text-lg text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md transition duration-200"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-lg text-gray-700 hover:text-gray-900 transition duration-200"
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

export default Header;
