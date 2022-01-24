const express = require("express");
const router = express.Router();

const posts = [{title: "My Title", description: "My Description"}];

router.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

router.post("/post", (req, res) => {
    const {title, description} = req.body;
    posts.push({title, description});
    res.status(201).json(posts);
});

router.patch("/post/:index", (req, res) => {
    const index = req.params.index;
    const {title, description} = req.body;
    posts[index] = {title, description};
    res.status(201).json(posts);
});

router.delete("/post/:index", (req, res) => {
    const index = req.params.index;
    posts.splice(index, 1);
    res.status(201).json(posts);
});

module.exports = router;