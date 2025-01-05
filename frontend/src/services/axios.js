import axios from "axios";

const API_URL = "http://localhost:3030/api"; // Update to your backend's base URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


//get token here 
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

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

// Login and Signup APIs
export const loginUser = async (email, password) => {
  const response = await axiosInstance.post("/auth/login", { email, password });
  return response.data;
};

export const signupUser = async (userData) => {
  const response = await axiosInstance.post("/auth/signup", userData);
  return response.data;
};

export default axiosInstance;
