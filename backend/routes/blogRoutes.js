const express = require('express');
const { getAllBlogs, createBlog, updateBlogLikes } = require('../controllers/blogController');
const router = express.Router();

router.get('/blogs', getAllBlogs);
router.post('/blogs', createBlog);
router.patch('/blogs/:id/likes', updateBlogLikes);

module.exports = router;
