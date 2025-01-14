// here admin route for adding updating and deleting products.
//
// // backend/routes/adminRoutes.js 


const express = require("express");

const adminAuth = require("../middlewares/adminAuth");
const {protect} = require("../middlewares/authMiddleware");
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} = require("../controllers/productsController");
const router = express.Router();


router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", adminAuth, createProduct);
router.put("/products/:id", adminAuth, updateProduct);
router.delete("/products/:id", adminAuth, deleteProduct);

module.exports = router;
