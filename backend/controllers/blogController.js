const Blog = require('../models/Blog');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().limit(10).skip((req.query.page - 1) * 10);
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlog = new Blog({ title, content });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBlogLikes = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.likes += req.body.like ? 1 : -1;
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllBlogs, createBlog, updateBlogLikes };
