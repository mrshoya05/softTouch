//here about productsController.js 
//this is the controller for the products page where we will  add get all product controller  and update product controller add new product controller and delete product controller.

const Product = require('../models/productModel');
const mongoose = require('mongoose');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
    };

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product by id:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
    };

    const createProduct = async (req, res) => {
        try {
            const { name, price, description, image, brand, category, countInStock } = req.body;
            const product = new Product({
                name,
                price,
                description,
                image,
                brand,
                category,
                countInStock,
                user: req.user._id
              
            });
            const createdProduct = await product.save();
            res.status(201).json(createdProduct);
        } catch (error) {
            console.error('Error creating product:', error.message);
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    };
    


    const updateProduct = async (req, res) => {
        try {
            const productId = req.params.id || req.query.id;
    
            // Check if productId is a valid ObjectId
            if (!mongoose.Types.ObjectId.isValid(productId)) {
                return res.status(400).json({ message: 'Invalid Product ID format' });
            }
    
            const {
                name,
                price,
                description,
                image,
                brand,
                category,
                countInStock,
            } = req.body;
    
            const product = await Product.findById(productId);
    
            if (product) {
                product.name = name ?? product.name;
                product.price = price ?? product.price;
                product.description = description ?? product.description;
                product.image = image ?? product.image;
                product.brand = brand ?? product.brand;
                product.category = category ?? product.category;
                product.countInStock = countInStock ?? product.countInStock;
    
                const updatedProduct = await product.save();
                res.json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            console.error('Error updating product:', error.message);
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    };
    
    
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            await product.remove();
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
    };

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
