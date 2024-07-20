const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const Blog = require('./models/Blog');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI; 
if (!mongoURI) {
  throw new Error("MONGO_URI environment variable not set");
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true, 
  tlsAllowInvalidCertificates: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/public/index.html'));
  });
  
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/blogs/:id/like', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.likes += 1;
    await blog.save();
    res.json({ likes: blog.likes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
