const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    amount: {
        type: Number,
        validate: {
            validator: (val) => {
                return val > 0;
            },
            message: "Amount can not be less the 0."
        }
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Product"
        }
    ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;