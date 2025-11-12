const express = require("express")
const authRouter = express.Router()
const { forgotPasswordHandler, signupHandler } = require("../controllers/authControllers")

authRouter.post("/signup", signupHandler)
authRouter.post("/forgot-password", forgotPasswordHandler)

module.exports = authRouter