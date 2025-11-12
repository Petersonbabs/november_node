const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email is importanter"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Password must at least 6 chacters"]
    },
    age: {
        type: Number
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    gender: {
        type: String,
        enum: ["Male", "Female"] // set of options
    }
})

const userModel = mongoose.model("users", userSchema) // userColRef
module.exports = userModel

// ASSIGNMENT
// Create a MOdel for product
// Create a controller for add new product
// Create a router for add new product