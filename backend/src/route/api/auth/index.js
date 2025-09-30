const express = require("express");
const { signupController, alluserController } = require("../../../controller/authController");
const router = express.Router()

router.post("/signup", signupController )
router.get("/getuserlist", alluserController)

module.exports = router