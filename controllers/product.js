"use strict";

const Product = require("../models/product");

function getProduct(req, res) {
  Product.findById(req.params.productId, (err, product) => {
    if (err) res.status(500).send(`Error: ${err}`);
    if (!product) res.status(404).send("Product can not find");
    res.status(200).send({ product });
  });
}

const getProducts = (req, res) => {
  Product.find({}, (err, products) => {
    if (err) res.status(500).send(`Error: ${err}`);
    if (!products) res.status(404).send("Product can not find");
    res.status(200).send({ products });
  });
};

function updateProduct(req, res) {
  let productId = req.params.productId;
  let update = req.body;

  Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
    if (err) {
      res.status(500).send(`Error don't save data: $(err)`);
    }

    res.status(200).send({ message: `Product updated: ${productUpdated}` });
  });
}

function deleteProduct(req, res) {
  Product.findById(req.params.productId, (err, product) => {
    if (err) res.status(500).send(`Error: ${err}`);
    if (product) {
      product.remove((err) => {
        if (err) res.status(500).send(`Error: ${err}`);
        res.status(200).send({ message: "Product deleted" });
      });
    }
  });
}

function insertProduct(req, res) {
  console.log("POST /api/product/");

  let product = new Product();
  product.name = req.body.name;
  product.picture = req.body.picture;
  product.price = req.body.price;
  product.description = req.body.description;
  product.category = req.body.category;

  product.save((err, productStored) => {
    if (err) {
      res.status(500).send(`Error don't save data: $(err)`);
    }

    res.status(200).send({ message: productStored });
  });
}

module.exports = {
  insertProduct,
  updateProduct,
  getProduct,
  getProducts,
  deleteProduct,
};
