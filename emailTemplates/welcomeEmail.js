const transporter = require("../config/nodemailer")

const sendWelcomeEmail = (name, email) => {
    transporter.sendMail({
        subject: "Welcome to Lex Clothing",
        from: "Lex Clothing<peter.babs.dev@gmail.com>",
        to: email,
        sender: "peter.babs.dev@gmail.com",
        // text: `Hello ${name}, welcome to Lex Clothing`,
        html: `
        <div>
          <h3>Hello, ${name}</h3>
          <p>Welcome to Lex Clothing. Start exploring our products</p>
          <a href="https://jumia.com" style="display: block; padding: .5rem 1rem; border-radius: 8px; background: red; color: white; text-align: center;">Start Shopping</a>
        </div>
        
        `
    })
}

module.exports = sendWelcomeEmail