const express = require("express");
const {
  signupController,
  alluserController,
  verifyOtpController,
  loginController
} = require("../../../controller/authController");
const router = express.Router()

router.post("/signup", signupController)
router.post("/verify-otp", verifyOtpController)
router.get("/getuserlist", alluserController)
router.post("/login", loginController)

module.exports = router