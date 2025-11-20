const productModel = require("../models/productModel")

const addNewProduct = async (req, res) => {
    try {
        const user = req.user
        const product = await productModel.create({ ...req.body, seller: user._id })
        res.status(201).json({
            success: true,
            message: "Product added successfully",
            product
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

const fetchProducts = async (req, res) => {
    try {
        const products = await productModel.find().populate("seller", "fullName email")
        res.status(201).json({
            success: true,
            message: "Products fetched successfully",
            products
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
}

module.exports = { addNewProduct, fetchProducts }