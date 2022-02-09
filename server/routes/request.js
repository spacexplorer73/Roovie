const express = require("express");
const router = express.Router();

const { isUserAuthorized, isAdminAuthorized } = require('../middleware/index.js');
const { fetchRequest, fetchRequests, createRequest, deleteRequest } = require('../controllers/request.js');

router.post('/create', isUserAuthorized, createRequest);
router.delete('/:id', isAdminAuthorized, deleteRequest);
router.get('/fetch/:id', fetchRequest);
router.get('/fetch', fetchRequests);

module.exports = router;