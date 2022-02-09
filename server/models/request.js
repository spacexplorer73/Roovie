const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
    type: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    genre: {
        type: String
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 5
    },
    year: {
        type: Number
    },
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: Date
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);