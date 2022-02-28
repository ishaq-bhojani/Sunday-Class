const express = require("express");
const usersController = require("../controllers/users");
const path = require("path");

const router = express.Router();

router.get("/signin", usersController.getSignIn);

router.get("/signup", usersController.getSignUp);

router.post("/signin", usersController.postSignIn);

router.post("/signup", usersController.postSignUp);

module.exports = router;