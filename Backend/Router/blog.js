const express = require('express');
const { addBlog, getBlogs } = require('../Controllers/blog');
const router = express.Router();

router.post('/add', addBlog);
router.get('/all', getBlogs);

module.exports = router;
