import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [date, setDate] = useState()
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch blog details based on blogId
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((response) => {
        const { title, description, category, updatedDate } = response.data;
        setTitle(title);
        setContent(description);
        setSelectedCategory(category);
        setDate(updatedDate);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
      });

    // Fetch categories from the API
    axios
      .get("http://localhost:5000/api/category")
      .then((response) => {
        console.log("Categories fetched:", response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBlog = {
        title,
        description: content,
        category: selectedCategory,
      };

      // API call to update the blog
      await axios.put(`http://localhost:5000/api/update/${id}`, updatedBlog);
      console.log("Blog updated successfully");
      window.location.href = "/";
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ml-28 mr-28">
      <div className="mb-4 mt-9">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
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
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="content"
        >
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
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="category"
        >
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update Blog
      </button>
    </form>
  );
}

export default Update;
