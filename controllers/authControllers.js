const userModel = require("../models/userModel")

// CRUD

const signupHandler = async (req, res) => {
    try {
        const user = await userModel.create(req.body)
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Unable to create user"
            })
        }

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message || "Error at signup controller"
        })
    }
}

const forgotPasswordHandler = (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required!"
        })
    }
    res.status(200).json({
        success: true,
        message: `A reset password link has been sent to your email: ${email}`
    })
}


module.exports = {
    forgotPasswordHandler,
    signupHandler
}