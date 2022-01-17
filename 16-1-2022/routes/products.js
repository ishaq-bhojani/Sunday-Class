const express = require("express");
const productsController = require("../controllers/products");
const path = require("path");
const {authMiddleware} = require("../middlewares/auth");

const router = express.Router();


router.get("/", authMiddleware, productsController.fetchAll);

router.get("/form", authMiddleware, productsController.getAddProduct);

router.post("/form", authMiddleware, productsController.postAddProduct);

module.exports = router;