import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products.jsx';
import ContactUs from './Components/ContactUs.jsx';
import BlogList from './Components/BlogList.jsx';
import BlogForm from './Components/BlogForm.jsx';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Pages/Home';

function App() {
  const [blogs, setBlogs] = useState([
    // Initial blogs can be added here or fetched from an API
    {
      author: "Rasmiranjan Nayak",
      topic: "Sustainable Development",
      body: "Keep the world clean",
    },
    // Add more initial blogs if needed
  ]);

  const addBlog = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };

  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              <div className="bg-cover bg-center min-h-screen bg-cream">
                <Signup />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="bg-cover bg-center min-h-screen bg-cream">
                <Login />
              </div>
            }
          />
          <Route
            path="/products"
            element={
              <div className="bg-cover bg-center min-h-screen bg-cream p-10">
                <Products />
              </div>
            }
          />
          <Route
            path="/contactUs"
            element={
              <div className="bg-cover bg-center min-h-screen bg-cream p-10">
                <ContactUs />
              </div>
            }
          />
          <Route
            path="/blogs"
            element={
              <div className="bg-cover bg-center min-h-screen bg-cream p-10">
                <BlogList blogs={blogs} />
              </div>
            }
          />
          <Route
            path="/writeBlog"
            element={
              <div className="bg-cover bg-center min-h-screen bg-cream p-10">
                <BlogForm onNewBlog={addBlog} />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
