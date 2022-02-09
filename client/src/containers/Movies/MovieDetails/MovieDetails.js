import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import { fetchMovie, fetchMoviesBySearch, findMovies, likeMovie } from "../../../actions/movieActions";
import Reviews from "../../Reviews/Reviews";
import MovieLikes from './LikesModal';

import { Paper, Typography, Divider, Button, Avatar } from '@material-ui/core/';
import useStyles from './styles';

/**
* @author
* @function MovieDetails
**/

const MovieDetails = (props) => {
    const { movieDetails, findMovie } = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
      dispatch( fetchMovie(id, history) )
    }, [id])

    useEffect(() => {
        dispatch( findMovies({ search: 'none', genre: movieDetails?.genre }) )
    }, [movieDetails])

    if(!movieDetails) return null;

    const openMovie = (_id) => { 
      scroll.scrollToTop();
      //history.push(`/movie/${_id}`);
      window.location.assign(`/movie/${_id}`); // *** because likes don't update on history.push *** 
    }

    console.log(findMovie)

    const similarMovies = findMovie.filter(({_id}) => _id !== movieDetails._id).slice(0, 6)

    return(
      <>
        <Paper className={classes.paper} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                  <Typography className={classes.heading} gutterBottom variant="h3" component="h2">{movieDetails.title}</Typography>
                  <Typography color="secondary" variant="h6" component="h2">{movieDetails.genre}</Typography>
                  <Typography gutterBottom variant="h6" color="textSecondary" component="h2"></Typography>
                  <Typography className={classes.description} gutterBottom variant="body1" component="p">{movieDetails.description}</Typography>
                  <Divider className={classes.hr} />
                  <MovieLikes movie={ movieDetails } />
                  <Divider className={classes.hrBelowLike} />
                  <Typography className={classes.ratingHeading}>
                    IMDB
                    <Avatar variant="rounded" className={classes.rating}>{movieDetails.rating}</Avatar>
                  </Typography>
                  <Divider className={classes.hrBelowLike} />
                </div>
                <div className={classes.imageSection}>
                  <img className={classes.media} src={ 'https://roovie.herokuapp.com/' + movieDetails.moviePoster || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png' } alt={movieDetails.title} />
                </div>
            </div>
            {(similarMovies.length) && (
                <div className={classes.section}>
                  <Typography className={classes.heading} gutterBottom variant="h5">You might also like :)</Typography>
                  <Divider className={classes.hr} />
                  <div className={classes.recommendedPosts}>
                    {similarMovies.map(({ title, moviePoster, _id }) => (
                      <div style={{ margin: '5px', cursor: 'pointer' }} onClick={() => openMovie(_id)} key={_id}>
                        <Typography className={classes.recMovTitle} gutterBottom variant="h6">{title.substring(0, 17)}{title.length > 17 ? '...' : null}</Typography>
                        <img className={classes.recMovImg} src={ 'https://roovie.herokuapp.com/' + moviePoster } width="200px" height="300px" />
                      </div>
                    ))}
                </div>
              </div>
            )}
        </Paper>
        <Paper className={classes.paper} elevation={6}>
          <Reviews movie={ movieDetails } />
        </Paper>
      </>
    )
}

export default MovieDetails;