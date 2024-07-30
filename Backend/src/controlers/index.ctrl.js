const blogModel = require("../models/blog.model");
const userModel = require("../models/user.model");

exports.getIndex = async (req, res) => {
  try {
    let User = await userModel.aggregate([
      {
        $lookup: {
          from: "blogs",
          localField: "blogs_id",
          foreignField: "_id",
          as: "blogs_array",
        },
      },
      {
        $out: "ufo",
      },
    ]);
    return res.status(201).send(User);
  } catch (err) {
    console.log(err.message);
  }
  try {
    let Blog = await blogModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "users_id",
          foreignField: "_id",
          as: "user_array",
        },
      },
      {
        $out: "bfo",
      },
    ]);
    return res.status(201).send(Blog);
  } catch (err) {
    console.log(err.message);
  }
};
