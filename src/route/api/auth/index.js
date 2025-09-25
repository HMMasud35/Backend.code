const express = require("express")
const router = express.Router()

router.get("/signup", (req, res) => {
  return res.send("signup route working ...")
})
console.log("signup route working ...");

module.exports = router