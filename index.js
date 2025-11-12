const express = require("express")
const productRouter = require("./routers/productRouter")
const userRouter = require("./routers/userRouter")
const authRouter = require("./routers/authRouter")
const connectToDb = require("./config/mongodb")
connectToDb()

const app = express()
app.use(express.json()) // Middleware: Every request will pass through app.use
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

// MVC R => Model, View, Controller, & Router

// listen for a port number
app.listen(5000, () => {
    console.log("Listening to port 5000")
})


app.get("/", (req, res) => {
    res.send("Welcome to node class") // text
})

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)