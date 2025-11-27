const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendWelcomeEmail = require("../emailTemplates/welcomeEmail")
const sendVerificationEmail = require("../emailTemplates/verificationEmail")

// CRUD

const signupHandler = async (req, res) => {
    const { email, password, fullName } = req.body
    try {
        // check if email already exist
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists"
            })
        }
        // hash the password w98yryudfyshjdf79wtyvdhfbsuidgfvieuv
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        // save to db 
        const user = await userModel.create({ ...req.body, password: hashedPassword })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Unable to signup",
                user
            })
        }

        // send welcome email
        sendWelcomeEmail(fullName, email)
        sendVerificationEmail(fullName, email)

        res.status(201).json({
            success: true,
            message: "Welcome onboard!",
            user
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Something went wrong at signup controller", error })
    }
}

const loginHandler = async (req, res) => {
    const { email, password } = req.body
    try {
        // find the user with email
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Email or password is incorrect: email",
            })
        }

        // compare the plain password (test1234) with the hashed password (IOshguqyweitwftygda7ydjhsduih)
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (!passwordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Email or password is incorrect: password",
            })
        }
        // generate a accessToken (jsonwebtoken)
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXP
        })
        // send the token to frontend
        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user
        })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: error.message || "Something went wrong at login controller", error })
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
    signupHandler,
    loginHandler
}