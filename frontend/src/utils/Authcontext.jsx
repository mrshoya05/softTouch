import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../services/axios";  // Adjust this import as necessary
import Login from "../pages/Login";
// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);  // Stores authentication (token)
  const [role, setRole] = useState(null);  // Stores user role (e.g., 'admin')

  // Function to handle login
  const login = async (email, password) => {
    try {
      // Make API call to login and get user data (including role)
      const response = await loginUser(email, password);

      if (response && response.token && response.role) {
        // Store token and role in state
        setAuth(response.token);  
        setRole(response.role);

        // Store token and role in localStorage for persistence
        localStorage.setItem("token", response.token);
        localStorage.setItem("role", response.role);  // Store the role in localStorage

        return { success: true, data: response };
      } else {
        return { success: false, error: "No token or role found in the response" };
      }
    } catch (error) {
      return { success: false, error: error.message || "Login failed" };
    }
  };

  // Function to handle logout
  const logout = () => {
    setAuth(null);  // Clear auth token
    setRole(null);  // Clear role
    localStorage.removeItem("token");  // Remove token from localStorage
    localStorage.removeItem("role");   // Remove role from localStorage
  };

  // Sync auth and role states with localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");

    // If there's a stored token and role, update the state
    if (storedToken && storedRole) {
      setAuth(storedToken);  // Set token to auth state
      setRole(storedRole);    // Set role from localStorage
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
