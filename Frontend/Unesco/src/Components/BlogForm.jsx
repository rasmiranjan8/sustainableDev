import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0f7fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
`;

const FormTitle = styled.h2`
  color: #00796b;
  margin-bottom: 1rem;
`;

const FormField = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #004d40;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #004d40;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #004d40;
  border-radius: 5px;
  min-height: 150px;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #00796b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #004d40;
  }
`;

const BlogForm = ({ onNewBlog }) => {
  const [topic, setTopic] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/blogs', { topic, body, author });
      onNewBlog(response.data); // Update the parent with the new blog
      setTopic('');
      setBody('');
      setAuthor('');
      navigate('/blogs'); // Navigate to the blog list page after submission
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Write a Blog</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="topic">Topic</Label>
          <Input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="body">Body</Label>
          <TextArea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="author">Author</Label>
          <Input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default BlogForm;
