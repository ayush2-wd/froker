
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  intro: { type: String, required: true },
  paraone: { type: String, required: true },
  paratwo: { type: String, required: true },
  parathree: { type: String, required: true },
  image: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model('Blog', blogSchema);
