import React from 'react'
import { animateScroll as scroll } from "react-scroll";

import { MoviesDashboardImage, MoviesDashboardImageContent, MoviesDashboardImageTitle, MoviesDashboardImageYear } from './MoviesElements';
import "./Movies.css";

/**
* @author
* @function MovieCard
**/

const MovieCard = ({ movie }) => {

    const openMovie = () => {
        scroll.scrollToTop();
        //history.push(`/movie/${movie._id}`);
        window.location.assign(`/movie/${movie._id}`);
    }

    return(
        <MoviesDashboardImageContent>
            <div className="movie-dashboard-image-container">
                <MoviesDashboardImage src={'https://roovie.herokuapp.com/' + movie.moviePoster || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' } alt={movie.title} />
                <div className="movie-dashboard-image-overlay">
                    <div className="movie-dashboard-image-overlay-ratings-container">
                        <div className="movie-dashboard-image-overlay-ratings">
                            {movie.rating}
                        </div>
                    </div>
                    <button className="movie-dashboard-image-overlay-button" onClick={ openMovie }>Read More</button>
                </div>
            </div>
            <MoviesDashboardImageTitle>{movie.title.substring(0, 19)}{(movie.title.length > 19) ? '...' : null}</MoviesDashboardImageTitle>
            <MoviesDashboardImageYear>{movie.year}</MoviesDashboardImageYear>
        </MoviesDashboardImageContent>
    )
}

export default MovieCard;