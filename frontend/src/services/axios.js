import axios from "axios";

const API_URL = "http://localhost:3030/api"; // Update to your backend's base URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to attach token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor to handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      if (newToken) {
        localStorage.setItem("token", newToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

// Function to refresh token
const refreshToken = async () => {
  try {
    const response = await axiosInstance.post("/auth/refresh-token");
    return response.data.token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

// Fetch user profile
export const getProfile = async () => {
  const response = await axiosInstance.get("/users/profile");
  return response.data;
};

// Update user profile
export const updateProfile = async (updatedUser) => {
  const response = await axiosInstance.put("/users/profile", updatedUser);
  return response.data;
};

// Login API - Handles login and token storage
export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post("/auth/login", { email, password });


    if (response.data && response.data.token) {
      return response.data;  // Return the data if the response contains a token
    } else {
      return { success: false, error: "Login failed. No token received." }; // Handle cases where no token is returned
    }
  } catch (error) {
    return { success: false, error: error.response ? error.response.data : error.message }; // Return the error message if the API call fails
  }
};

// Signup API
export const signupUser = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export default axiosInstance;
