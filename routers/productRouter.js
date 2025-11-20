const express = require("express")
const { addNewProduct, fetchProducts } = require("../controllers/productController")
const isLoggedIn = require("../middlewares/isLoggedIn")
const productRouter = express.Router()

productRouter.post("/", isLoggedIn, addNewProduct)
productRouter.get("/all", fetchProducts)
module.exports = productRouter

// default
// named