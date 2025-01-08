// header file 

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {  
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto flex items-center justify-between p-6">
                <h1 className="text-2xl font-bold text-gray-800">Skincare Dashboard</h1>
                <nav>
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link
                                to={"/"}
                                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/profile"}
                                className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/logout"}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;