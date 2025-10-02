const signupModel = require("../model/signup.model");
const generateOTP = require("../utils/otp");
const sendEmailVerify = require("../utils/send_email");

// user registration
const signupController = async (req, res, next) => {
  let { name, email, password, phone, role } = req.body

  let otp = generateOTP()

  let user = new signupModel({
    name,
    email,
    password,
    phone,
    role,
    otp
  })

  await user
    .save()
    .then(() => {
      sendEmailVerify(email, otp, name)

      // otp set time
      setTimeout(async () => {
        let otpremove = await signupModel
          .findOneAndUpdate({ email },
            { otp: null },
            { new: true })
        await otpremove.save()
      }, 10000);

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

// email verify
const verifyController = async (req, res, next) => {
  let { email, otp } = req.body

  let user = await signupModel.findOne({ email })

  if (!user) {
    return res
      .status(404)
      .json({
        success: false,
        message: "User Not Found"
      })
  } else {
    if (user.otp === otp) {
      let verify = await signupModel
        .findOneAndUpdate({ email },
          { verify: true },
          { new: true })

      return res
        .status(200)
        .json({
          success: true,
          message: "OTP verify successfull",
          data: verify
        })
    } else {
      return res
        .status(404)
        .json({
          success: false,
          message: "OTP Not Match"
        })
    }
  }

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

module.exports = { signupController, alluserController, verifyController }