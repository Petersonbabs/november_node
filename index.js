const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const productRouter = require("./routers/productRouter")
const userRouter = require("./routers/userRouter")
const authRouter = require("./routers/authRouter")
const connectToDb = require("./config/mongodb")
require("./config/nodemailer")
const cors = require("cors")
connectToDb()

const app = express()
app.use(express.json()) // Middleware: Every request will pass through app.use
// app.use(cors())
app.use(cors({
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST"],
}))

// MVC R => Model, View, Controller, & Router

// MIDDLEWARE => function that can access req, res, next
// 1. Access and modify the request object
// 2. Access and use the response object
// 3. Transfer the request-chain to another middleware or final request handler



// listen for a port number
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Listening to port")
})



app.get("/", (req, res) => {
    res.send("Welcome to node class") // text
})

app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)