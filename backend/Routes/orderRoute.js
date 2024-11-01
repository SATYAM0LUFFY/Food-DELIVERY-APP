const express = require("express");
const {authMiddleware} = require("../middlewares/auth")
const {placeOrder} = require("../controllers/ordersController")

const orderRouter  = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

module.exports = { orderRouter }