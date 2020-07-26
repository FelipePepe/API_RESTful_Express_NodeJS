"use strict";

const ProductCtrl = require("../controllers/product");
const UserCtrl = require("../controllers/user");
const auth = require("../middlewares/auth");
const express = require("express");
const api = express.Router();

api.get("/product", auth, ProductCtrl.getProducts);
api.get("/product/:productId", ProductCtrl.getProduct);
api.post("/product", ProductCtrl.insertProduct);
api.put("/product/:productId", ProductCtrl.updateProduct);
api.delete("/product/:productId", ProductCtrl.deleteProduct);

api.post("/signIn", UserCtrl.signIn);
api.post("/signUp", UserCtrl.signUp);

api.get("/private/", auth, (req, res) => {
  res.status(200).send({ message: "Acceded OK" });
});

module.exports = api;
