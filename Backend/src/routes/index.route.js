const express = require('express');
const router = express.Router();
const { Blogs, BlogCreate, BlogsCount, updateBlog, deleteBlog } = require("../controlers/blogs.js");
const { Category, CategoryCreated } = require("../controlers/category.js");
const { Register, Login, Logout } = require("../controlers/users.js");
const isLoggedIn = require("../controlers/Auth.js");

// Middleware
router.use(express.json());

// Routes
router.get("/", (req, res) => {
    res.send("Welcome to the API");
});

// User routes
router.post("/api/user/login", Login);
router.post("/api/user/logout", Logout);
router.post("/api/user/register", Register);

// Blog routes
router.get("/api/blogs", Blogs, isLoggedIn, BlogCreate);
router.get("/api/blogs/:id", Blogs); // Fetch a specific blog
router.put("/api/update/:id", updateBlog);
router.delete("/api/blogs/:id", deleteBlog);
router.post("/api/blogs/create", isLoggedIn, BlogCreate);

// Category routes
router.get("/api/category", Category);
router.post("/api/category", CategoryCreated);

module.exports = router;
