import React, { useState, useEffect } from "react";
import axiosInstance from "../services/axios";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: null,
    skinType: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the logged-in user's data from the backend
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/profile");
        setUser(response.data);
        setUpdatedUser(response.data);
      } catch (err) {
        setError("Failed to fetch user data. Please try again.");
        console.error("Error fetching user data:", err);
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleEditToggle = async () => {
    if (isEditing) {
      try {
        const response = await axiosInstance.put("/profile", updatedUser);
        setUser(response.data);
        setError(""); // Clear any previous errors
      } catch (err) {
        setError("Failed to update user data. Please try again.");
        console.error("Error updating user data:", err);
      }
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">My Profile</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <p className="text-gray-800">{user.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <p className="text-gray-800">{user.email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Age</label>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={updatedUser.age}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          ) : (
            <p className="text-gray-800">{user.age}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Skin Type</label>
          {isEditing ? (
            <select
              name="skinType"
              value={updatedUser.skinType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Skin Type</option>
              <option value="Normal">Normal</option>
              <option value="Dry">Dry</option>
              <option value="Oily">Oily</option>
              <option value="Combination">Combination</option>
              <option value="Sensitive">Sensitive</option>
            </select>
          ) : (
            <p className="text-gray-800">{user.skinType}</p>
          )}
        </div>

        <button
          onClick={handleEditToggle}
          className={`w-full px-4 py-2 font-semibold text-white rounded-lg ${
            isEditing ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
