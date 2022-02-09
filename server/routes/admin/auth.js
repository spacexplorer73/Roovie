const express = require("express");
const router = express.Router();
const multer = require("multer");

const { login, register } = require("../../controllers/admin/auth");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/profile/admin/')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 25 * 1024 * 1024 // accepts only upto 25mb
    }
});

router.post('/login', login);
router.post('/register', upload.single('adminProfilePicture'), register);

module.exports = router;