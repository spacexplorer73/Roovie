import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { Paper, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from "./styles";
/**
* @author
* @function ReviewCard
**/

const ReviewCard = ({ movie }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [userReviews, setUserReviews] = useState(movie?.review);
    const history = useHistory();
    const classes = useStyles();


    const toggleMovie = () => {
        history.push(`/movie/${movie._id}`);
    }

    return(
        <Paper className={classes.paper} elevation={3}>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                    <Typography className={classes.title}>{movie.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ol className={classes.userReviews}>
                        { userReviews?.filter((name) => name.split(' -')[0] === user.username).map((review) =>  (
                            <li key={1}><Typography onClick={ toggleMovie } style={{ cursor: 'pointer' }}>{review.split(' -')[1]}</Typography></li>
                        ))}
                    </ol>
                </AccordionDetails>
            </Accordion>
        </Paper>
    )
}

export default ReviewCard;