const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: { type: String, required: true }, // String is shorthand for {type: String}
    price: {
        type: Number,
        validate: {
            validator: (val) => {
                return val > 0;
            },
            message: "Price can not be less the 0."
        }
    },
    ratings: Number,
    inStock: Boolean,
    description: {
        type: String,
        validate: {
            validator: (val) => {
                return val.length > 99;
            },
            message: "Description can not be less the 100 letters."
        }
    }
});

productSchema.static('findByTitle', function (title) {
    return this.find({ title });
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;