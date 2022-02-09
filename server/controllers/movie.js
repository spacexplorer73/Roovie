const mongoose = require("mongoose");
const Movie = require("../models/movie.js");

exports.fetchAllMovies = async (req, res) => {
    try {
        const allM = await Movie.find()
                                    .sort({ _id: -1 })
        res.status(200).json({
            data: allM
        });
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

exports.fetchLimitedMovies = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 15;
        const startIndex = (Number(page) - 1)*LIMIT;
        const total = await Movie.countDocuments({});
        const movies = await Movie.find()
                                    .sort({ _id: -1 })
                                    .limit(LIMIT)
                                    .skip(startIndex)
        res.status(200).json({
            data: movies,
            currentPage: Number(page), 
            totalNumberOfPages: Math.ceil(total / LIMIT)
        });
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

exports.fetchPreview = async (req, res) => {
    const { page } = req.query;
    try {
        const LIMIT = 5;
        const startIndex = (Number(page) - 1)*LIMIT;
        const total = await Movie.countDocuments({});
        const previewMovies = await Movie.find()
                                    .sort({ _id: -1 })
                                    .limit(LIMIT)
                                    .skip(startIndex)
        res.status(200).json({
            data: previewMovies
        });
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

exports.fetchMoviesBySearch = async (req, res) => {
    const { search, genre, year, rating } = req.query;
    try {
        const title = new RegExp(search, 'i');
        const movies = await Movie.find({ $or: [ { title }, { genre }, { year: (Number(year) <= 2017) ? { $lte: year, $gte: year - 5 } : { $in: year } }, { rating: (rating === '6') ? { $lt: rating } : { $lte: rating, $gte: rating - 1 } } ] });

        res.status(200).json({ 
            data: movies 
        });
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

exports.findMovies = async (req, res) => {
    const { search, genre } = req.query;
    try {
        const title = new RegExp(search, 'i');
        const findMovies = await Movie.find({ $or: [ { title }, { genre } ] })

        res.status(200).json({ 
            data: findMovies 
        });
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

// ADD movie
exports.addMovie = async (req, res) => {
    const { title, description, genre, year, rating, createdBy } = req.body;

    const newMovie = new Movie({
        title,
        description, 
        genre, 
        year, 
        rating, 
        moviePoster: req.file.path, // req.file.originalname
        createdBy,
        createdAt: new Date().toISOString()
    })

    try {
        await newMovie.save();
        
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(409).json({ 
            message: error.message
        });
    }
}

exports.fetchMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const movieDetails = await Movie.findById(id)
        res.status(200).json(
            movieDetails
        );
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
}

// UPDATE movie
exports.updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, description, genre, moviePoster, rating, year } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No movie with id: ${id}`);

    const updatedMovie = { title, description, genre, moviePoster, rating, year, _id: id };

    await Movie.findByIdAndUpdate(id, updatedMovie, { new: true })

    res.json(updatedMovie);
}

// LIKE movie
exports.likeMovie = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No movie with id: ${id}`);

    const movie = await Movie.findById(id)

    const index = movie.likes.findIndex((id) => id === String(req.user._id));

    if (index === -1) {
        movie.likes.push(req.user._id); // like
      } else {
        movie.likes = movie.likes.filter((id) => id !== String(req.user._id)); // dislike
      }
      const updatedMovie = await Movie.findByIdAndUpdate(id, movie, { new: true });
      res.status(200).json(updatedMovie);
}

// COMMENT on a movie
exports.postReview = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    try {
        const movie = await Movie.findById(id);

        movie.review.push(value);

        const updatedMovie = await Movie.findByIdAndUpdate(id, movie, { new: true });
        res.status(200).json(updatedMovie)
    } catch (error) {
        console.log(error)
    }
}