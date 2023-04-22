const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Please enter Book name"],
    },
    author: {
      type: String,
      required: [true, "Please enter Book Author"],
    },
    isbn: {
      type: Number,
      required: [true, "Please enter ISBN Number"],
      default: 1,
    },
    unitPrice: {
      type: Number,
      required: [true, "Please enter Book price"],
    },
    unitInStock: {
      type: Number,
      required: [true, "please enter product stock."],
      default: 1,
    },
    condition: {
      type: String,
      default: 'New',
    },
    numOfPages: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});
  
module.exports = mongoose.model("Book", bookSchema, "Books");