const categoryModel = require("../models/category.js");

let Category = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).send("Internal Server Error");
    }
}
let CategoryCreated = async (req, res) => {
    try {
        let { category } = req.body;
        let cat = new categoryModel({
            title: category,
        });
        await cat.save();
        res.status(201).send("Category created successfully");
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).send("Internal Server Error");
    }
}

let categoryChange = async (req, res) => {
    try {
        const category = req.params.category;
        let blogs;
        if (category === 'All') {
            blogs = await blogModel.find();
        } else {
            blogs = await blogModel.find({ category: category });
        }
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error fetching blogs by category:', error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = { Category, CategoryCreated, categoryChange }
