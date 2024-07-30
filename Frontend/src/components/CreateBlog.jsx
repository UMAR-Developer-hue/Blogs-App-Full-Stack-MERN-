import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateBlog() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch categories from the backend
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
  
      // Find the selected category object
      const category = categories.find(cat => cat.title === selectedCategory);
  
      // Log the category to ensure it's being set correctly
      console.log('Selected category:', category);
  
      console.log('Sending request to create blog...');
      const response = await axios.post("http://localhost:5000/api/blogs/create", {
        title: title,
        description: content,
        category:{ _id: category.title },
        categoryId: { _id: category._id }, // Send the category object with _id
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      console.log('Response received:', response);
  
      if (response.status === 201) {
        setMessage("Blog created successfully");
        setTitle("");
        setContent("");
        setSelectedCategory("");
      } else {
        setMessage("Error creating blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      setMessage("Error creating blog");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="ml-28 text-2xl font-bold mb-4 mt-5">Create New Blog</h1>
      <form onSubmit={handleSubmit} className="ml-28 mr-28">
        <div className="mb-4  mt-9">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4 mt-9">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="content">
            Blog Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4 mt-9">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option  value="">Select a category</option>
            {categories.map((category) => (
              <option className="font-bold" key={category._id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Blog
        </button>
      </form>
      {message && <p className="mt-4 ml-28 text-green-500">{message}</p>}
    </div>
  );
}

export default CreateBlog;
