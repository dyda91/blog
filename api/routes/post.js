const router = require("express").Router();
const Post = require("../models/post");

const PostController = require("../controllers/PostController")

router
    .route("/post")
    .post((req, res) => PostController.create(req, res));

module.exports = router