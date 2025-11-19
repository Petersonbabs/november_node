// GET ALL USERS
// GET SINGLE USER
// UPDATE USER
// DELETE A USER

// IMPLEMENT CART FEATURE IN YOUR BACKEND
// add to cart
// get all cart items
// remove from cart items
// increase cart quantity
// decrease cart quantity


const userModel = require("../models/userModel")

// Model.find() Return all documents in the collection
// Model.find(query) Return all documents that match the query in the collection
// Model.findById(id) Return the document with the specified id
// Model.findOne(query)
// Model.findByIdAndUpdate(id, payload) update the document with the specified id with the payload
// Model.findByIdAndDelete(id) Delete the document with the specified id


// Model.deleteMany()
// Model.deleteOne()
// Model.findByIdAndRemove()
// Model.findOneAndDelete()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.replaceOne()
// Model.updateMany()
// Model.updateOne()

const getAllUSers = async (req, res) => {
    try {
        const users = await userModel.find()
        if (!users) {
            return res.status(400).json({ success: false, message: "Unable to fetch users" })
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            total: users.length,
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Unable to fetch users" })
    }
}

// SEARCH, FILTER, SORT, PAGINATION
const getMofiedUsers = async (req, res) => {
    try {
        const users = await userModel.find({ age: 7 })
        if (!users) {
            return res.status(400).json({ success: false, message: "Unable to fetch users" })
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            total: users.length,
            users
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Unable to fetch users" })
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findById(id) // objectId
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" })
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Unable to fetch user" })
    }
}

const getSingleUser = async (req, res) => {
    const { email } = req.query
    // /api/user/details?email=test@dev.com
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Unable to fetch user" })
    }
}

const updateUserProfile = async (req, res) => {
    const { id } = req.params
    try {
        const user = await userModel.findByIdAndUpdate(id, req.body)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" })
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Unable to upate user profile" })
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        await userModel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Unable to delete user" })
    }
}

module.exports = {
    getAllUSers,
    getMofiedUsers,
    getUserById,
    getSingleUser,
    updateUserProfile,
    deleteUser
}