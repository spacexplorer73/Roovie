const mongoose = require("mongoose");
const Request = require('../models/request.js');

// fetch request (singular)
exports.fetchRequest = async (req, res) => {
    const { id } = req.params;
    try {
        const requestDetails = await Request.findById(id)
        res.status(200).json(requestDetails);
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

// fetch requests
exports.fetchRequests = async (req, res) => {
    try {
        const requests = await Request.find().sort({ _id: -1 });
        
        res.status(200).json(requests);
    } catch (error) {
        res.status(404).json(error);
    }
}

// create request
exports.createRequest = async (req, res) => {
    const { title, description, genre, year, rating, type } = req.body;

    const newRequest = new Request({
        title,
        description, 
        genre, 
        year, 
        rating,
        type,
        createdAt: new Date().toISOString(),
        requestedBy: req.user._id
    });

    try {
        await newRequest.save();

        res.status(201).json(newRequest);
    } catch (error) {
        res.status(404).json(error);
    }
}

// delete request
exports.deleteRequest = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Sorry! Request Id - ${id} not found`);

    await Request.findByIdAndRemove(id);

    res.status(200).json({ 
        isRequestDeleted: true 
    });
}