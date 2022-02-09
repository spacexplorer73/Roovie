const express = require("express");
const router = express.Router();
const multer = require("multer");

const { login, register, updateUser } = require("../controllers/auth.js");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/profile/')
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
router.post('/register', upload.single('userProfilePicture'), register);
router.patch('/:id', upload.single('userProfilePicture'), updateUser);

module.exports = router;