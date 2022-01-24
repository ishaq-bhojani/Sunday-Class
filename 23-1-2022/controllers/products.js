const Product = require("../models/product");
exports.getAddProduct = (req, res) => {
    res.render("form", {title: "Add Product Form"});
};

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.send("Saved");
};

exports.fetchAll = (req, res) => {
    const products = Product.fetchAll();
        res.render("products", {products});
};