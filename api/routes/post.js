const router = require("express").Router();

const postController = require("..//controllers/postController")

router
    .route("/post")
    .post((req, res) => postController.create(req, res));

module.exports = router