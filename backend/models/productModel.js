//product model file

 const mongoose = require('mongoose');

    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        image: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    });

    const Product = mongoose.model('Product', productSchema);   

    module.exports = Product;

