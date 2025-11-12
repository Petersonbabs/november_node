const mongoose = require("mongoose")
const mongoDbUri = "mongodb+srv://peterbabsdev_db_user:g39GCiK6r83yh3gM@lex.hcmd9zb.mongodb.net/?appName=Lex"

const connectToDb = async () => {
    try {
        const connected = await mongoose.connect(mongoDbUri)
        if (connected) {
            console.log("MONGODB connected 😎")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToDb