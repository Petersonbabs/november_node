const express = require("express")
const productRouter = express.Router()

productRouter.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "All products fetched"
    })
})

productRouter.post("/dd", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ksisysb shsjh jhbsva jajsgh"
    })
})

module.exports = productRouter

// default
// named