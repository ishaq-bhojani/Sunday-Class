const express = require("express");
const path = require("path");

const router = express.Router();

router.post("/", (req, res, next) => {
    res.send(req.body);
});

router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "form.html" ));
});

module.exports = router;