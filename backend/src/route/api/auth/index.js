const express = require("express");
const { signupController } = require("../../../controller/authController");
const router = express.Router()

router.post("/signup", signupController )

module.exports = router