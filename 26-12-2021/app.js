const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const fromRoutes = require("./routes/form");
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/form", fromRoutes);

app.use("/", (req, res) => {
    res.send("Welcome to express app");
});

app.listen(3000);