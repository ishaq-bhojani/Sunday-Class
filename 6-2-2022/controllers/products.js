const Product = require("../models/product");
exports.getAddProduct = (req, res) => {
    res.render("form", {title: "Add Product Form"});
};

exports.postAddProduct = async (req, res) => {
    const product = new Product(req.body.title);
    console.log(req.body.title)
    await product.save();
    res.send("Saved");
};

exports.fetchAll = async (req, res) => {
    const products = await Product.fetchAll();
    console.log(products);
        res.render("products", {products});
};