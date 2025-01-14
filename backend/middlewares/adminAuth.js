// middelware for check  logged user is admin or user.
//using jwtt check logged is admin or not.
//if user is admin then next() otherwise return 403 status code with message "You are not authorized to access this resource"
// models/User.js
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["User", "Consultant", "Admin"], default: "User" },
//   age: { type: Number, required: false },
//   skinType: { type: String, default: "" },
// });

// // Hash password before saving
// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// module.exports = mongoose.model("User", UserSchema);

// backend/middlewares/adminAuth.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

const adminAuth = async (req, res, next) => {
   try {
       const authHeader = req.header("Authorization");
       if (!authHeader || !authHeader.startsWith("Bearer ")) {
           return res.status(403).send({ error: "No token provided, authorization denied" });
       }

       const token = authHeader.replace("Bearer ", "");
       const decoded = jwt.verify(token, process.env.JWT_SECRET);

       const user = await User.findOne({ _id: decoded._id, role: "Admin" });
       if (!user) {
           return res.status(403).send({ error: "You are not authorized to access this resource" });
       }

       req.user = user;
       next();
   } catch (error) {
       res.status(403).send({ error: "You are not authorized to access this resource" });
   }
};

module.exports = adminAuth;
