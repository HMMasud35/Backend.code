const signupModel = require("../model/signup.model");

const signupController = async (req, res, next) => {
  let { name, email, password, phone, role } = req.body

  let user = new signupModel({
    name,
    email,
    password,
    phone,
    role
  })

  await user
    .save()
    .then(() => {
      return res
        .status(201)
        .json({
          success: true,
          message: "user created successfull",
          data: user
        })
    })
    .catch((err) => {
      next(err)
    })
}

module.exports = { signupController }