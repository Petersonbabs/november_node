const express = require("express")
const authRouter = express.Router()
const { forgotPasswordHandler, signupHandler, loginHandler } = require("../controllers/authControllers")

authRouter.post("/signup", signupHandler)
authRouter.post("/login", loginHandler)
authRouter.post("/forgot-password", forgotPasswordHandler)

module.exports = authRouter