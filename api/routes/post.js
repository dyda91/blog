const router = require("express").Router();
const Post = require("../models/post");

const PostController = require("../controllers/postController")

router
    .route("/post")
    .post((req, res) => PostController.create(req, res));

router
   .route("/post")
   .get((req, res) => PostController.getAll(req, res));

router
   .route("/post/:id")
   .get((req, res) => PostController.get(req, res));

router
   .route("/post/:id")
   .delete((req, res) => PostController.delete(req, res));

router
   .route("/post/:id")
   .put((req, res) => PostController.update(req, res));

module.exports = router