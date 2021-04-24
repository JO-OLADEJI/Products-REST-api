const express = require('express');
const router = express.Router();
const Product = require('../Models/productSchema.js');
const validateProduct = require('./validateProduct.js');




// -> GET routes
router.get('/', (req, res) => {
  Product.find().then(data => res.json(data));
});

router.get('/:id', (req, res) => {
  Product.find({ _id: req.params.id })
    .then(resource => res.json(resource[0]))
    .catch(error => res.json(error));
});





// -> POST routes
router.post('/', (req, res) => {
  if (!validateProduct(req.body).error) {
    const { name, description, price, category } = req.body;
    const newProduct = new Product({
      name: name,
      description: description,
      price: price,
      category: category
    });
    newProduct.save().then(data => res.json(data));
  }
  else {
    res.send(validateProduct(req.body).error.details[0].message);
  }
});





// -> PUT routes
router.put('/:id', (req, res) => {
  if (!validateProduct(req.body).error) {
    const { name, description, price, category } = req.body;
    Product.updateOne(
      { _id: req.params.id }, 
      { $set: {
          name: name,
          description: description,
          price: price,
          category: category
        }
      })
      .then(() => res.send('Product Updated.'))
      .catch(error => res.send(error));
  }
  else {
    res.send(validateProduct(req.body).error.details[0].message);
  }
});





// -> DELETE routes
router.delete('/:id', (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.send('Product deleted!'))
    .catch(error => res.send(error));
});





module.exports = router;