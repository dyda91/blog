const router = require("express").Router();

// post router
const postRouter = require("./post");

// auth router
const authRouter = require("./auth")

router.use("/", postRouter);
router.use("/auth", authRouter);

module.exports = router;