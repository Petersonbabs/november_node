// NPM: Is a package manager used to install, uninstalling, updating, manageing packages
// --save-dev
// npm install --save-dev @types/express

const express = require("express")
const app = express()
const products = [
    {
        "id": 1,
        "name": "Wireless Bluetooth Earbuds",
        "price": 25000,
        "description": "Noise-cancelling wireless earbuds with long-lasting battery.",
        "category": "Electronics",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 2,
        "name": "Men's Classic Leather Wallet",
        "price": 8500,
        "description": "Premium leather wallet with multiple card slots.",
        "category": "Fashion",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 3,
        "name": "Stainless Steel Water Bottle",
        "price": 4500,
        "description": "Insulated scratch-resistant stainless bottle.",
        "category": "Accessories",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 4,
        "name": "LED Desk Lamp",
        "price": 12000,
        "description": "Adjustable brightness and temperature LED desk lamp.",
        "category": "Home",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 5,
        "name": "Gaming Mouse RGB",
        "price": 11000,
        "description": "Ergonomic gaming mouse with 6 programmable buttons.",
        "category": "Electronics",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 6,
        "name": "Casual Cotton T-Shirt",
        "price": 4000,
        "description": "100% cotton breathable unisex t-shirt.",
        "category": "Fashion",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 7,
        "name": "Portable Power Bank 20000mAh",
        "price": 19500,
        "description": "Fast charging power bank with dual USB output.",
        "category": "Electronics",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 8,
        "name": "Bluetooth Portable Speaker",
        "price": 17500,
        "description": "High-bass speaker with long battery playback.",
        "category": "Electronics",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 9,
        "name": "Unisex Sneakers",
        "price": 18000,
        "description": "Stylish lightweight sneakers for everyday use.",
        "category": "Fashion",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 10,
        "name": "Stainless Steel Cutlery Set",
        "price": 10500,
        "description": "24-piece premium stainless cutlery set.",
        "category": "Home",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 11,
        "name": "Leather Office Chair",
        "price": 68000,
        "description": "Ergonomic high-back leather chair for desk use.",
        "category": "Home",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 12,
        "name": "USB-C Fast Charger",
        "price": 6500,
        "description": "25W super fast wall charger with overheat protection.",
        "category": "Electronics",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 13,
        "name": "Aloe Vera Skin Moisturizer",
        "price": 3500,
        "description": "Hydrating aloe vera skin moisturizing gel.",
        "category": "Beauty",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 14,
        "name": "Smart Fitness Band",
        "price": 22000,
        "description": "Waterproof smart band with heart rate monitor.",
        "category": "Electronics",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 15,
        "name": "Laptop Stand Adjustable",
        "price": 9000,
        "description": "Aluminum foldable laptop stand for desk setup.",
        "category": "Accessories",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 16,
        "name": "Women's Shoulder Handbag",
        "price": 16500,
        "description": "PU leather handbag with durable straps.",
        "category": "Fashion",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 17,
        "name": "Non-stick Frying Pan",
        "price": 8000,
        "description": "Die-cast non-stick frying pan, 28cm.",
        "category": "Home",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 18,
        "name": "Electric Hair Clipper",
        "price": 14000,
        "description": "Rechargeable hair clipper with precision blades.",
        "category": "Beauty",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 19,
        "name": "Yoga Exercise Mat",
        "price": 6500,
        "description": "Non-slip thick yoga mat for gym and home workouts.",
        "category": "Sports",
        "image": "https://via.placeholder.com/300"
    },
    {
        "id": 20,
        "name": "Rechargeable LED Ring Light",
        "price": 17000,
        "description": "Portable ring light with phone holder, ideal for content creators.",
        "category": "Electronics",
        "image": "https://via.placeholder.com/300"
    }
]


// listen for a port number
app.listen(5000, () => {
    console.log("Listening to port 5000")
})

// baseUrl: http://localhost:4000
// endpoint: /products

// app.method("/route", requestHandler)
// app.method("/route", (req, res)=>{})

app.get("/", (req, res) => {
    res.send("Welcome to node class") // text
})



// GET ALL PRODUCTS
app.get("/products", (req, res) => {
    const filterProducts = products.filter(product => product.price <= req.query.maxPrice || product.name.toLowerCase().includes(req.query.search.toLowerCase()))
    res.status(200).json({
        total: filterProducts.length,
        filterProducts
    }) // json
})

// POST PRODUCT
app.post("/products", (req, res) => {
    // console.log(req.query)
    console.log(req.body)
    res.status(201).json({
        success: true,
        message: "New product addedd successfully"
    })
})


// GET A SINGLE PRODUCT
app.get("/products/:id", (req, res) => {
    // make request to DB to find the product with this req.params.id
    res.status(200).json({
        success: true,
        message: "product fetched successfully",
        product: { name: "Nike shoe", price: 4000, id: req.params.id }
    })
})

// params: parameters: Add data to yout URL path


app.patch("/products/:productId", (req, res) => {
    res.status(200).json({
        success: true,
        message: "New product updated successfully",
        product: { name: "Nike shoe", price: 4000, id: req.params.productId }
    })
})

app.delete("/products/:id", (req, res) => {
    res.status(200).json({
        success: true,
        message: "New product deleted successfully"
    })
})

app.put("/products/:id", (req, res) => {
    res.status(200).json({
        success: true,
        message: "New product updated successfully"
    })
})




// POSTMAN WALKTHROUGH
// Workspace
// Collection:
// Folder
// Request:: (Method, requires url)
// Environments

// Request methods
// Request params: Add data to yout URL path: example: get single product
// Request query: Add data to yout URL path. Key=value pair /products?id=3: Get all product with filtering, sorting, pagination
// Request body
// Request headers

// Response Status
// Response Json






















// request object: Contains every info about the request that was made.
// response object: Contains every methods for handling the response to a request that was made.
// requestHandler is a function that handle a request and also responds back
// (req, res)=>{}