// fetch("", {
//     headers: {
//         authorization: `Bearer ${token}`
//     }
// })

const userModel = require("../models/userModel");
const blacklistedTokenModel = require("./blacklistedToken");
const jwt = require("jsonwebtoken");


const isLoggedIn = async (req, res, next) => {
    try {
        let token;
        // 1. Check if user has token
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1]
        }
        if (!token) {
            return res.status(403).json({
                success: false,
                message: "Token is required"
            })
        }
        // 2.  confirm the token has not being blacklisted => 
        const blacklisted = await blacklistedTokenModel.findOne({ token })
        if (blacklisted) {
            return res.status(403).json({
                success: false,
                message: "Token has been blacklisted"
            })
        }
        // 3. check the token's validity and expiration. if valid, decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        // 4. find the token's user from DB   
        const user = await userModel.findOne({ email: decoded.email })
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "User not found"
            })
        }
        // 5. Add the user to the req object
        req.user = user
        // 6. pass the request-chain to the next middleware or final request handler 
        next()

    } catch (error) {
        console.log(error)
        if (error.message == "jwt malformed") {
            return res.status(400).json({
                success: false,
                message: "Invalid token"
            })
        } else if (error.message == "jwt expired") {
            return res.status(400).json({
                success: false,
                message: "Session expired. Please login again.",
                error
            })
        } else {
            return res.status(400).json(error)
        }
    }
}

// AUTHORIZATION


module.exports = isLoggedIn