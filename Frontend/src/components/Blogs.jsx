import React, { useState, useEffect } from "react";
import axios from "axios";

function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState({
    category: "",
    title: "",
  });
  const [count, setCount] = useState();
  const [limit, setLimit] = useState(3);
  const [skip, setSkip] = useState(0);
  const [reload, setReload] = useState(false);
  const [sort, setSort] = useState("date_asc");

  const nextBlogs = () => {
    setSkip((skip) => skip + limit);
  };

  const prevBlogs = () => {
    setSkip((skip) => skip - limit);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setQuery({ ...query, category: "" });
    } else {
      setQuery({ ...query, category: category });
    }
    setReload(true);
  };

  const handleInputChange = (event) => {
    let value = event.target.value;
    setQuery({ ...query, title: value, description: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReload(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/category")
      .then((response) => {
        setCategories(["All", ...response.data.map((cat) => cat.title)]);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    axios
      .get("http://localhost:5000/api/blogs", {
        params: { limit: limit, skip: skip, sort: sort, ...query },
      })
      .then((response) => {
        setReload(false);
        setBlogs(response.data.data); 
        setCount(response.data.total);
      })
      .catch((error) => {
        setReload(false);
        console.error("Error fetching blogs:", error);
      });
  }, [limit, skip, query, sort, reload]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center pt-8">Blogs</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="block">
          <div className="mr-2 inline-block">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Select Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleCategoryClick(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="inline-block">
            <form className="w-96 mt-7" onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  onChange={handleInputChange}
                  className="block items-center justify-center w-full p-2 ps-10 text-sm text-black border mr-4 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search here....."
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="block">
          <div className="bg-gray-300 text-gray-700 rounded p-2  mt-6 ml-4 inline-block float-right">
            Total: {count}
          </div>
          <div className="w-60 float-right inline-block ">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sort"
            >
              Sorting
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value={"date_asc"}>Ascending by date</option>
              <option value={"date_desc"}>Descending by date</option>
              <option value={"title_asc"}>Ascending by title</option>
              <option value={"title_desc"}>Descending by title</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {blogs.length === 0 ? (
          <h4 className="text-2xl pt-3">Blogs not found</h4>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-4 border rounded shadow-md flex flex-col mt-6"
            >
              <div className="mb-7">
                <h3 className="pb-2">
                  Blog Category:{" "}
                  <span className="font-bold">
                    {blog.categories_array.join(", ")}
                  </span>
                </h3>
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                <p className="text-gray-600">
                  {blog.description.slice(0, 200)}
                </p>
                <h2 className="pt-4">
                  Author: <span className="font-bold">{blog.user_name}</span>
                </h2>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-end mt-4">
        <div className="limit grid-cols-1 items-center flex mr-2">
          <label
            className="inline-flex text-gray-700 text-sm font-bold  mr-4"
            htmlFor="sort"
          >
            Size:
          </label>
          <select
            id="sort"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            className="inline-flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value={"3"}>6</option>
            <option value={"15"}>15</option>
            <option value={"30"}>30</option>
            <option value={"90"}>90</option>
          </select>
        </div>
        <button
          className="bg-gray-300 text-gray-700 px-4 mr-2 text-sm rounded"
          onClick={prevBlogs}
          disabled={skip <= 0}
        >
          Previous
        </button>
        <button
          className="bg-gray-300 text-gray-700 px-4 text-sm  rounded"
          onClick={nextBlogs}
          disabled={skip + limit >= count}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Blogs;
