const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: String,
  description: {
    type: String,
    default: '-'
  },
  price: Number,
  category: String
});

module.exports = mongoose.model('Products', product);