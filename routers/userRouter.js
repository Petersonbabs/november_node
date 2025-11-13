const express = require("express")
const { getAllUSers, getMofiedUsers, getUserById, getSingleUser, updateUserProfile, deleteUser } = require("../controllers/userController")
const userRouter = express.Router()

userRouter.get("/", getAllUSers)
userRouter.get("/search", getMofiedUsers)
userRouter.get("/profile/:id", getUserById)
userRouter.patch("/profile/:id", updateUserProfile)
userRouter.delete("/profile/:id", deleteUser)
userRouter.get("/details", getSingleUser)

module.exports = userRouter

// default
// named