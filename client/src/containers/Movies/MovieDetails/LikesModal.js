import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from "react-redux";

import { likeMovie } from "../../../actions/movieActions";

import { Button } from '@material-ui/core';
import ForwardIcon from '@material-ui/icons/Forward';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
import useStyles from "./styles";
/**
* @author
* @function MovieLikes
**/

const MovieLikes = ({ movie }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [likes, setLikes] = useState(movie?.likes);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();


    const hasLikedMovie = movie.likes.find((id) => id === user?._id);

    const handleLike = async () => {
        dispatch(likeMovie(movie._id));
        if(hasLikedMovie) {
            setLikes(movie.likes.filter((id) => id !== user?._id)) // dislike
        } else {
            setLikes([...movie.likes, user?._id]); // like
        }
    }

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === user?._id)
                ? (
                    <><ForwardIcon className={classes.upvote} fontSize="large" />&nbsp;{ likes.length }</>
                ) : (
                    <><ForwardOutlinedIcon className={classes.upvote} fontSize="large" />&nbsp;{ likes.length }</>
                );
        }
        return <><ForwardOutlinedIcon className={classes.upvote} fontSize="large" />&nbsp;0</>;
    }

    return(
        <Button size="small" style={{ color: 'green' }} disabled={!user} onClick={ handleLike }>
            <Likes />
        </Button>
    )
}

export default MovieLikes;