const Blog = require('../Model/blog');

async function addBlog(req, res) {
    const { title, content } = req.body;

    try {
        const blog = new Blog({
            title,
            content
        });

        await blog.save();

        res.status(201).json({ msg: 'Blog created successfully', blog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error creating blog', error });
    }
}

async function getBlogs(req, res) {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ blogs });
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching blogs', error });
    }
}

module.exports = {
    addBlog,
    getBlogs,
};
