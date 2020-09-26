const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: false},
    email: { type: String, required: true, unique: true},
    email_is_verified: {type: Boolean, default: false},
    password: { type: String },
    date: { type: Date, default: Date.now }
})

const User = mongoose.model("User", userSchema);

module.exports = User;