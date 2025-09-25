const { default: mongoose } = require("mongoose");

const singpuSchema = new mongoose.Schema({
  name: {
    type: String,
    requred: true
  },
  email: {
    type: String,
    requred: true
  },
  password: {
    type: String,
    requred: true
  },
  phone: {
    type: Number,
  },
  role: {
    enum: ["user", "admin"],
    default: "user"
  }
}, {timestamps:true})