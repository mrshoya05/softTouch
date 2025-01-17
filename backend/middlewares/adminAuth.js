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


        if (!decoded.id) {
            return res.status(403).send({ error: "Invalid token, no user ID found" });
        }

        const user = await User.findOne({ _id: decoded.id, role: "Admin" });

        if (!user) {
            return res.status(403).send({ error: "You are not authorized to access this resource" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in adminAuth middleware:", error);
        res.status(403).send({ error: "You are not authorized to access this resource" });
    }
};

module.exports = adminAuth;
