// here routes for admin to add, update and delete products.

const express = require("express");
const router = express.Router();

const adminAuth = require("../middlewares/adminAuth");
const { fetchUsers, deleteUser } = require("../controllers/admin/fetchUsers");

// const deleteUser = require("../controllers/admin");

router.get("/getusers", adminAuth, fetchUsers);
// delete 
router.delete("/user/delete/:id", adminAuth, deleteUser);

module.exports = router;