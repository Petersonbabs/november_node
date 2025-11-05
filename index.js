// NPM: Is a package manager used to install, uninstalling, updating, manageing packages
// --save-dev
// npm install --save-dev @types/express

const express = require("express")
const app = express()

// listen for a port number
app.listen(5000, () => {
    console.log("Listening to port 5000")
})

// baseUrl: http://localhost:4000
// endpoint: /products

// app.method("/route", requestHandler)
// app.method("/route", (req, res)=>{})

app.get("/", (req, res) => {
    res.send("Welcome to node class") // text
})

app.get("/products", (req, res) => {
    console.log(req)
    res.json([
        { name: "Nike shoe", price: 4000 },
        { name: "Nike shoe", price: 4000 },
        { name: "Nike shoe", price: 4000 },
    ]) // json
})

// get the following endpoints and test with your browser.
//  - Get users
// - Get orders
// - Get posts

// request object: Contains every info about the request that was made.
// response object: Contains every methods for handling the response to a request that was made.
// requestHandler is a function that handle a request and also responds back
// (req, res)=>{}