const { query } = require("express");
const blogModel = require("../models/blog.model");
const userModel = require("../models/user.model");
const url = require("url")

let Blogs = async (req, res) => {
  try {
    let query = {};
    if (req.query.category !== undefined && req.query.category !== "") {
      let categoryArray = [req.query.category];
      query.categories_array = {
        $in: categoryArray,
      };
    }

    if (req.query.title !== undefined && req.query.title !== "") {
      const titleParts = req.query.title.split(" ");
      const regexPatterns = titleParts.map(
        (part) => new RegExp(part.trim().replace(/[^a-zA-Z0-9\s.]/g, ""), "i")
      );
      query.$or = [{ title: { $in: regexPatterns } }];
    }
    if (req.query.description !== undefined && req.query.description !== "") {
      const descriptionParts = req.query.description.split(" ");
      const regexPatterns = descriptionParts.map(
        (part) => new RegExp(part.trim().replace(/[^a-zA-Z0-9\s.]/g, " "), "i")
      );
      query.$or = [{ description: { $in: regexPatterns } }];
    }

    let limit = req.query.limit ? parseInt(req.query.limit) : 3;
    let skip = req.query.skip ? parseInt(req.query.skip) : 0;
    let sort_array = req.query.sort.split("_");
    console.log(sort_array);
    let sort;
    if (sort_array[0] == "date") {
      sort = { created_at: sort_array[1] == "asc" ? 1 : -1 };
    }
    if (sort_array[0] == "title") {
      sort = { title: sort_array[1] == "asc" ? 1 : -1 };
    }
    console.log(sort);
    const pipelines = [
      {
        $lookup: {
          from: "users",
          localField: "users_id",
          foreignField: "_id",
          as: "user_data",
        },
      },
      {
        $unwind: {
          path: "$user_data",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "categories",
        },
      },
      {
        $addFields: {
          user_name: "$user_data.username",
          categories_array: {
            $map: {
              input: "$categories",
              as: "category",
              in: "$$category.title",
            },
          },
        },
      },
      { $match: query },
      { $sort: sort },
    ];

    const blogsData = await blogModel
      .aggregate([...pipelines, { $skip: skip }, { $limit: limit }])
      .exec();
        
    const blogsCount = await blogModel
      .aggregate([...pipelines, { $count: "totalCount" }])
      .exec();

    res.status(200).send({
      limit: limit,
      skip: skip,
      total: blogsCount[0] ? blogsCount[0].totalCount : 0,
      data: blogsData,
    });
    let myUrl = url.parse(req.url, true)
    console.log(myUrl);
    console.log(req.query);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).send(error);
  }
};

let BlogCreate = async (req, res) => {
  try {
    const { title, description, category, categoryId } = req.body;
    const user = await userModel.findById(req.user.userid);
    const currentDate = new Date();
    if (!user) {
      return res.status(404).send("User not found");
    }
    const newBlog = new blogModel({
      title,
      description,
      category,
      category_id: [categoryId._id],
      users_id: [user._id],
      created_at: currentDate,
      updated_at: currentDate,
    });
    await newBlog.save();
    user.blogs_id.push(newBlog._id);
    await user.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateBlog = async (req, res) => {
  try {
    const currentDate = new Date();

    const { title, description, category } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        category,
        created_at: currentDate,
        updated_at: currentDate,
      },
      { new: true }
    );
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).send("Internal Server Error");
  }
};

let deleteBlog = async (req, res) => {
  try {
    const blog = await blogModel.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).send("Blog not found");
    }
    res.status(200).send("Blog deleted successfully");
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).send("Server error");
  }
};

module.exports = { Blogs, BlogCreate, updateBlog, deleteBlog };
