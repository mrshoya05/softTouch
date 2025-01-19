import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import { FaUserCircle, FaBell } from "react-icons/fa";

const Header = () => {
  const { auth, role, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-6">
        <h1 className="text-2xl font-semibold text-gray-800">Skincare Dashboard</h1>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="text-lg text-gray-700 hover:text-gray-900 transition">
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
                <li>
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
                <li>
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
                <li>
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

export default Header;
