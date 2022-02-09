import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { postReview } from "../../actions/movieActions";

import { Avatar, Paper, Typography, TextField, Button } from "@material-ui/core";
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';

/**
* @author
* @function Reviews
**/

const Reviews = ({ movie }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [movieReviews, setMovieReviews] = useState(movie?.review);
    const [review, setReview] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const finalReview = `${user?.username} - ${review}`;
        const newReviews = await dispatch( postReview(finalReview, movie._id) );
        setMovieReviews(newReviews);
        setReview('');
    }

    // New Line on Shift + Enter
    const handleKeyPress = (e) => {
        if(e.keyCode === 13 && !e.shiftKey) {
            handleSubmit();
        }
    }

    return(
        <div className={classes.container}>
            <Typography className={classes.heading} gutterBottom variant="h3" component="h2">Reviews</Typography>
            <div className={classes.addReviewContainer}>
                { user ?  
                    <div className={classes.addReview}>
                        <TextField
                            label="Post a Review"
                            multiline
                            rows={4}
                            variant="filled"
                            placeholder="I liked this movie soo much!"
                            onKeyDown={ handleKeyPress }
                            onChange={ (e) => { setReview(e.target.value) } }
                            value={ review }
                            InputProps={{
                                className: classes.textFieldColor
                            }} 
                            InputLabelProps={{
                                className: classes.textFieldColor
                            }}
                        />
                        <div className={classes.buttonWrapper}>
                            <Button className={classes.button} variant="filled" color="primary" onClick={ handleSubmit }>Submit</Button>
                            <Button className={classes.button} variant="filled" color="primary" onClick={ () => { setReview('') } }>Clear</Button>
                        </div>
                    </div>
                    :
                    <Paper style={{ background: 'rgb(150 149 157 / 52%)', marginBottom: '10px' }} elevation={6}>
                        <div className={classes.userNotLoggedIn}>
                            Please Log In to post a review
                            <Link className={classes.redirectLogin} to='/login' >Click Here to Login</Link>
                        </div>
                    </Paper>
                }
                <div className={classes.reviews}>
                    <Typography className={classes.heading} gutterBottom variant="h6">{ movieReviews?.length } Reviews</Typography>
                    <div className={classes.reviewContainer}>
                        { movieReviews?.map((c, i) => (
                                <div className={classes.reviewTemplate} key={i}>
                                    <Avatar className={classes.reviewTemplateAvatar} src={user?.userProfilePicture} alt={user?.username}>{user?.username.toUpperCase().charAt(0)}</Avatar> {c}
                                </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;