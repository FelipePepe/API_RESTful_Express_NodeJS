"use strict";

const ProductCtrl = require("../controllers/product");
const express = require("express");
const api = express.Router();

api.get("/product", ProductCtrl.getProducts);
api.get("/product/:productId", ProductCtrl.getProduct);
api.post("/product", ProductCtrl.insertProduct);
api.put("/product/:productId", ProductCtrl.updateProduct);
api.delete("/product/:productId", ProductCtrl.deleteProduct);

module.exports = api;
