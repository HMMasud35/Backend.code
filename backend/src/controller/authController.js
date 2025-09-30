const signupModel = require("../model/signup.model");


// user registration
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


// get all user
const alluserController = async (req, res, next) => {
  try {
    let allusers = await signupModel.find({})
    return res
      .status(200)
      .json({
        success: true,
        message: "all users fetch successfull",
        data: allusers
      })
  } catch (error) {
    return res
      .status(500)
      .json({
        success: false,
        message: err.message || err
      })
  }

}

module.exports = { signupController, alluserController }