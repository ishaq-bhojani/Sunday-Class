const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true }, // String is shorthand for {type: String}
    price: Number,
    ratings: Number,
    inStock: Boolean,
    description: String
});

productSchema.static('findByTitle', function(title) { 
    return this.find({ title });
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;