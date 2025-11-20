const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        seller: {
            type: mongoose.Schema.Types.ObjectId, // name: "jsuuee", seller: 827386w8tr76wdvyf23q8
            ref: "users",
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
            enum: ["fashion", "gadget", "electronics"]
        },

        price: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
