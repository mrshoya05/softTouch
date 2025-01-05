const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/profileUpdateController");
const {protect} = require("../middlewares/authMiddleware"); // Assuming JWT authentication middleware

const router = express.Router();

router.get("/profile", protect(), getUserProfile);
router.put("/profile", protect(), updateUserProfile);

module.exports = router;
