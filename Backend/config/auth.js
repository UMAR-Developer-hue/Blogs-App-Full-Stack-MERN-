const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {

    if (req.cookies.token === "") {
        console.log("you must be loggedIn..!!!");
    } else {
        let data = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        req.user = data;
    }
    next();
};

module.exports = authenticate;
