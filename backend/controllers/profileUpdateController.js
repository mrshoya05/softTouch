const User = require("../models/User");

// Get User Profile
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // User ID from JWT payload
    const user = await User.findById(userId).select("-password"); // Exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // User ID from JWT payload
    const { name, age, skinType } = req.body;

    // Validate request body
    if (!name || !age || !skinType) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Update user profile
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, age, skinType },
      { new: true, runValidators: true } // Return updated doc, apply schema validations
    ).select("-password"); // Exclude password from the response

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user profile:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports = { getUserProfile, updateUserProfile };
