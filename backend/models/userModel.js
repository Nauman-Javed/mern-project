const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userModel);
