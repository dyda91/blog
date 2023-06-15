const router = require("express").Router();
const AuthController = require("../controllers/authController.js");

router.post("/register", AuthController.userRegister)
router.post("/login", AuthController.auth)


module.exports = router;