import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
  }

  #root {
    height: 100%;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8f5e9;
  min-height: 100vh;
  width: 100%;
  padding: 0;
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
  color: #7cfc00;
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

const ChatIconButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #00796b;
  color: white;
  border: none;
  border-radius: 10px;
  width: 200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 16px;
  padding: 10px;
  transition: background-color 0.3s;

  @media (max-width: 600px) {
    width: 150px;
    font-size: 14px;
  }

  &:hover {
    background-color: #6d8d3b;
  }
`;

const Icon = styled(FaRegComment)`
  font-size: 24px;
  margin-bottom: 5px;
`;

const Text = styled.span`
  display: block;
  text-align: center;
  margin-top: 5px;
  line-height: 1.2;
`;

const BlogList = ({ blogs }) => {
  const navigate = useNavigate();

  const handleChatIconClick = () => {
    navigate("/writeBlog");
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header>
          <HeaderTitle>Nature Blog</HeaderTitle>
        </Header>
        {blogs.map((blog, index) => (
          <BlogContainer key={index}>
            <BlogTitle>{blog.topic}</BlogTitle>
            <BlogAuthor>By: {blog.author}</BlogAuthor>
            <BlogBody>{blog.body}</BlogBody>
          </BlogContainer>
        ))}
      </PageContainer>
      <ChatIconButton onClick={handleChatIconClick}>
        <Icon />
        <Text>Write new blog</Text>
      </ChatIconButton>
    </>
  );
};

export default BlogList;
