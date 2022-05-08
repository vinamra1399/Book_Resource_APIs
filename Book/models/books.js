const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  pages: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const book=new mongoose.model('Book',bookSchema);
module.exports = book;
