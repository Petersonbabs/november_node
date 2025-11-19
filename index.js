const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const productRouter = require("./routers/productRouter")
const userRouter = require("./routers/userRouter")
const authRouter = require("./routers/authRouter")
const connectToDb = require("./config/mongodb")
connectToDb()

const app = express()
app.use(express.json()) // Middleware: Every request will pass through app.use

// MVC R => Model, View, Controller, & Router

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