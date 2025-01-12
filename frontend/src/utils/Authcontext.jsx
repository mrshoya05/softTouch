import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser } from "../services/axios";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  // Function to handle login
  const login = async (email, password) => {
    try {
      // Make API call to login
      const userData = await loginUser(email, password);
      // If the user data contains a token, set auth and return success
      if (userData && userData.token) {
        setAuth(userData);
        localStorage.setItem("token", userData.token); // Save token to localStorage
        return { success: true, data: userData };
      } else {
      
        return { success: false, error: "No token found in the response" };
      }
    } catch (error) {
      // Log the error for debugging
   
      return { success: false, error: error.message || "Login failed" };
    }
  };

  // Function to handle logout
  const logout = () => {
    setAuth(null);
    localStorage.removeItem("token"); // Clear token from localStorage
  };

  // Sync auth state with localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAuth({ token: storedToken });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
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
