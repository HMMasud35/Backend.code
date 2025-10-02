const express = require("express");
const { signupController, alluserController, verifyController } = require("../../../controller/authController");
const router = express.Router()

router.post("/signup", signupController )
router.post("/verify-otp", verifyController)
router.get("/getuserlist", alluserController)

module.exports = router