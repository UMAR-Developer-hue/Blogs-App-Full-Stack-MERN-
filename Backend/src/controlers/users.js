var router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");
const cookieParser = require("cookie-parser");
const cors = require("cors");
var body_parser = require("body-parser");
router.use(cookieParser());
router.use(body_parser.json());
router.use(cors());

const Register = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let checkuser = await userModel.findOne({ email });
        if (checkuser) {
            res.status(500).send("User already have an account");
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    let user = await userModel.create({
                        username,
                        email,
                        password: hash,
                        updatedAt:Date.now()
                    });
                    delete user.password;
                    console.log("Registered");
                    res.status(201).send({ message: "User registered successfuly" });
                });
            });
        }
    } catch (errror) {

    }
}

let Login = async (req, res) => {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email }); // Email Verification
    if (!user) {
        res.status(500).send("Invalid email/ password");
    } else {
        bcrypt.compare(password, user.password, (err, result) => {
            // Passward Verification
            if (result) {
                let token = jwt.sign(
                    { email: email, userid: user._id },
                    process.env.SECRET_KEY
                );

                delete user.password;
                res.status(201).cookie("accessToken", token).send({
                    user: user,
                    accessToken: token,
                });
            } else {
                res.status(500).send("Invalid password");
            }
        });
    }
}

let Logout = async (req, res) => {
    res.clearCookie("accessToken");
    res.status(200).send("Logged out successfully");
}

module.exports = {
    Register, Login, Logout
}
