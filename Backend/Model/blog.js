// src/components/BlogList.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8f5e9;
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.header`
  background-color: #00796b;
  color: white;
  width: 100%;
  text-align: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const BlogContainer = styled.div`
  background-color: #f1f8e9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  max-width: 800px;
  width: 100%;
  padding: 1rem;
`;

const BlogTitle = styled.h2`
  color: #388e3c;
  margin-bottom: 0.5rem;
`;

const BlogAuthor = styled.h4`
  color: #6a1b9a;
  margin-bottom: 0.5rem;
`;

const BlogBody = styled.p`
  color: #424242;
`;

const BlogList = ({ newBlog }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [newBlog]);

  return (
    <PageContainer>
      <Header>
        <HeaderTitle>Nature Blog</HeaderTitle>
      </Header>
      {blogs.map((blog) => (
        <BlogContainer key={blog._id}>
          <BlogTitle>{blog.topic}</BlogTitle>
          <BlogAuthor>By: {blog.author}</BlogAuthor>
          <BlogBody>{blog.body}</BlogBody>
        </BlogContainer>
      ))}
    </PageContainer>
  );
};

export default BlogList;
