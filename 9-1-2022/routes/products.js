const express = require("express");
const productsController = require("../controllers/products");
const path = require("path");

const router = express.Router();


router.get("/", productsController.fetchAll);

router.get("/form", productsController.getAddProduct);

router.post("/form", productsController.postAddProduct);

module.exports = router;