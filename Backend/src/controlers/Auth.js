var router = require("express").Router();
var body_parser = require("body-parser");
var jwt = require("jsonwebtoken");
var cookieParser = require("cookie-parser")
var cors = require("cors")
require("dotenv").config()
router.use(cookieParser());
router.use(body_parser.json());
router.use(cors());

const isLoggedIn = (req, res ,next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      console.log("No authorization header");
      return res.status(401).send("You must be logged in");
    }
  
    const token = authHeader.split(' ')[1];
    if (!token) {
      console.log("No token found");
      return res.status(401).send("You must be logged in");
    }
  
    try {
      const data = jwt.verify(token, process.env.SECRET_KEY);
      console.log("Token data:", data);
      req.user = data;
    } catch (error) {
      console.log("Invalid token:", error);
      return res.status(401).send("Invalid token");
    }
    next()
  };

  module.exports = isLoggedIn

