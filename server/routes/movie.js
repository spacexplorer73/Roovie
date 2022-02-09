const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
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

const { isUserAuthorized, isAdminAuthorized } = require("../middleware/index.js");
const { addMovie, updateMovie, fetchAllMovies, fetchLimitedMovies, fetchPreview, fetchMoviesBySearch, findMovies, fetchMovie, likeMovie, postReview } = require("../controllers/movie.js");

router.post('/add', isAdminAuthorized, upload.single('moviePoster'), addMovie);
router.patch('/update/:id', isUserAuthorized, updateMovie);
router.get('/fetch', fetchAllMovies);
router.get('/fetchLimited', fetchLimitedMovies);
router.get('/preview', fetchPreview);
router.get('/search', fetchMoviesBySearch);
router.get('/find', findMovies);
router.get('/:id', fetchMovie);
router.patch('/:id/like', isUserAuthorized, likeMovie); //to update number of upvotes of a movies
router.post('/:id/review', postReview);

module.exports = router;