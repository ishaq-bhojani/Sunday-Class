const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');

const app = express();
const { run } = require("./db");
run().catch(console.dir);

console.log(process.env.SECRET);

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  }));

app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    if(req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
})

const authRoutes = require("./routes/auth");
const productsRoutes = require("./routes/products");
const apiRoutes = require("./routes/api");
const path = require("path");

app.use(bodyParser.urlencoded({extended: false})); // x-www-form-urlencode
app.use(bodyParser.json()); // application/json
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use("/auth", authRoutes);
app.use("/product", productsRoutes);

app.use("/api", apiRoutes);

app.use("/", (req, res) => {
    res.render("home", {user: "Ishaq"});
});

app.listen(3000);