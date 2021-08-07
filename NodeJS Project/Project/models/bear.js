
const mongoose = require("mongoose");

const bearSchema = new mongoose.Schema({
    name: { type: "String", minlength: 2, maxlength: 20, required: true },
    type: String,
    movies: { type: [String] },
    likeCount: Number,
    imgUrl: String,
    isScary: Boolean,
    date: Date
});

const Bear = mongoose.model("Bearrr", bearSchema);
module.exports = Bear;