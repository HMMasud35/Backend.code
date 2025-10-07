const express = require("express");
const {
  signupController,
  alluserController,
  verifyController,
  loginController
} = require("../../../controller/authController");
const router = express.Router()

router.post("/signup", signupController)
router.post("/verify-otp", verifyController)
router.get("/getuserlist", alluserController)
router.post("/login", loginController)

module.exports = router