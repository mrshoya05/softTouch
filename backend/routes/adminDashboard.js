// here routes for admin to add, update and delete products.

const express = require("express");
const router = express.Router();

const adminAuth = require("../middlewares/adminAuth");

const  fetchUsers  = require("../controllers/admin/fetchUsers");

router.get("/getusers", adminAuth, fetchUsers);

module.exports = router;