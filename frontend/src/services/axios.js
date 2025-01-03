import axios from 'axios';

const API_URL = 'http://localhost:3030/api'; // Update your backend API URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Login user
export const loginUser = async (email, password) => {
  const response = await axiosInstance.post('/auth/login', { email, password });
  return response.data;
};

// Signup user
export const signupUser = async (userData) => {
  const response = await axiosInstance.post('/auth/signup', userData);
  return response.data;
};

export default axiosInstance;
