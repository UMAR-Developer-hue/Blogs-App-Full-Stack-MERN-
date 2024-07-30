const mongoose = require("mongoose");
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")

require("dotenv").config();

let UserSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  blogs_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
    },
  ],
  craetedAt: {
    type: Date,
    default: Date.now,
    required:true
  },
  updatedAt: {
    type: Date,
    required:true
  },
});

// UserSchema.pre('save',  async function (next) {
//     console.log("pre");
//     if (this.isModified("password")){
//         this.password = bcrypt.hash(this.password, 10)
//     }
//     next()
// })

// UserSchema.methods.isPasswordCorrect =  async function (password) {
//     return await bcrypt.compare(password, this.password)
// }

// UserSchema.generateAccessToken = function ( next) {
//     jwt.sign({
//         _id: this._id,
//         email: this.email
//     }, process.env.ACCESS_TOKEN)

//     next()
//     // console.log();
// }

module.exports = mongoose.model("users", UserSchema);
