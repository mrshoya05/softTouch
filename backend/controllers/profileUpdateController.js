const User = require("../models/User");

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming JWT middleware adds user ID
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, age, skinType } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, age, skinType },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { getUserProfile, updateUserProfile };
