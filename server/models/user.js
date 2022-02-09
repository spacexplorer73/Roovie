const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    agreedTerms: {
        type: Boolean,
        required: true
    },
    userProfilePicture: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);