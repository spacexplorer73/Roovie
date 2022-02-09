const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({

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
    likes: {
        type: [String], 
        default: [] 
    },
    review: {
        type: [String],
        default: []
    },
    year: {
        type: Number
    },
    moviePoster: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: Date
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);