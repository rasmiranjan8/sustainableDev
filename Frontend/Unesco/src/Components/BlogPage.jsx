// BlogPage.jsx
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import BlogList from "./BlogList";
import BlogForm from "./BlogForm";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([
    {
      author: "Rasmiranjan Nayak",
      topic: "Sustainable Development",
      body: "Keep the world clean",
    },
    // Add initial blogs here if needed
  ]); //gfkhjfgk

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <Routes>
      <Route path="/blogs" element={<BlogList blogs={blogs} />} />
      <Route path="/writeBlog" element={<BlogForm onNewBlog={addBlog} />} />
    </Routes>
  );
};

export default BlogPage;
