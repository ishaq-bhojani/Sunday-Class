const Product = require("../models/product");
exports.getAddProduct = (req, res) => {
    res.render("form", {title: "Add Product Form"});
};

exports.postAddProduct = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: 100,
        ratings: 4.2,
        inStock: true,
        description: "Data"
    });
    
    await product.save();
    res.send("Saved");
};

exports.fetchAll = async (req, res) => {
    const products = await Product.findByTitle('Book');
    console.log(products);
    res.render("products", {products});
    // const products = await Product.fetchAll();
    // console.log(products);
    //     res.render("products", {products});
};