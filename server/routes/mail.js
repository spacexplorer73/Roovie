const express = require("express");
const router = express.Router();

const { newsletterMail } = require("../controllers/mail.js");

router.post('/newsletter', newsletterMail);

module.exports = router;