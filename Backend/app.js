const express = require("express");
const app = express();
const indexRouter = require("./src/routes/index.route.js");
const cookieParser = require("cookie-parser");
const db = require("./config/db-config.js");
const createError = require("http-errors");
const body_parser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
app.use(logger("dev"));
app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cookieParser());
app.use(body_parser.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DEconstE");
  next();
});
db();
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    err: err,
  });
});


app.listen(process.env.PORT, () => {
  console.log("app is listening at ", process.env.PORT);
});

