import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { addMovie } from "../../actions/movieActions";

import { TextField, Button, CircularProgress, Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import { deleteRequest, fetchrequest } from '../../actions/requestActions';

/**
* @author
* @function MoviePreview
**/

const MoviePreview = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState(0);
    const [rating, setRating] = useState(5);
    const [moviePoster, setMoviePoster] = useState('');
    const { requestDetails } = useSelector(state => state.request);
    const { newMovie, loading } = useSelector(state => state.movie);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    
    useEffect(() => {
        dispatch( fetchrequest(id) )
        setTitle(requestDetails.title)
        setDescription(requestDetails.description)
        setGenre(requestDetails.genre)
        setYear(requestDetails.year)
        setRating(requestDetails.rating)
    }, [requestDetails.length])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('title', title);
        form.append('description', description);
        form.append('genre', genre);
        form.append('year', year);
        form.append('rating', rating);
        form.append('moviePoster', moviePoster);
        form.append('createdBy', requestDetails.requestedBy);

        dispatch( addMovie(form, history) );
    }

    return(
        <form className={classes.container} onSubmit={ handleSubmit } encType="multipart/form-data">
            { loading ? 
                <Paper className={classes.loaderContainer} elevation={6}>
                    <CircularProgress size="5rem" />
                </Paper>
                :
                <>
                    <div className={classes.heading}>Add A Movie</div>
                    <div className={classes.addMovieWrapper}>
                        <div className={classes.inputWrapper}>
                            <TextField 
                                fullWidth
                                onChange={ (e) => setTitle(e.target.value) }
                                value={title}
                                id="title"
                                name="title"
                                label="Title" 
                                variant="filled"
                                InputProps={{
                                    className: classes.textFieldColor
                                }} 
                                InputLabelProps={{
                                    className: classes.textFieldColor
                                }}
                            />
                        </div>
                        <div className={classes.inputWrapper}>
                            <TextField 
                                fullWidth
                                onChange={ (e) => { setDescription(e.target.value) } }
                                value={description}
                                id="description"
                                name="description"
                                multiline
                                rowsMax={6}
                                label="Description" 
                                variant="filled" 
                                InputProps={{
                                    className: classes.textFieldColor
                                }}
                                InputLabelProps={{
                                    className: classes.textFieldColor
                                }}
                            />
                        </div>
                        <div className={classes.inputWrapper}>
                            <TextField 
                                fullWidth
                                onChange={ (e) => { setGenre(e.target.value) } }
                                value={genre}
                                id="genre"
                                name="genre"
                                label="Genre" 
                                variant="filled" 
                                InputProps={{
                                    className: classes.textFieldColor
                                }}
                                InputLabelProps={{
                                    className: classes.textFieldColor
                                }}
                            />
                        </div>
                        <div className={classes.inputWrapper}>
                            <TextField 
                                fullWidth
                                onChange={ (e) => { setYear(e.target.value) } }
                                value={year}
                                id="year"
                                name="year"
                                type="number"
                                label="Year" 
                                variant="filled" 
                                InputProps={{
                                    className: classes.textFieldColor
                                }}
                                InputLabelProps={{
                                    className: classes.textFieldColor
                                }}
                            />
                        </div>
                        <div className={classes.inputWrapper}>
                            <TextField 
                                fullWidth
                                onChange={ (e) => { setRating(e.target.value) } }
                                value={rating}
                                id="rating"
                                name="rating"
                                type="number"
                                label="Ratings"
                                placeholder={'(default 5)'}
                                variant="filled"
                                InputProps={{
                                    className: classes.textFieldColor
                                }}
                                InputLabelProps={{
                                    className: classes.textFieldColor
                                }}
                            />
                        </div>
                        <div className={classes.inputWrapper}>
                            <input
                                type="file"
                                filename="moviePoster"
                                multiple={false}
                                onChange={ (e) => { setMoviePoster(e.target.files[0]) } }
                                id="moviePoster"
                            />

                        </div>
                        <div className={classes.inputWrapper}>
                            <Button type="submit" onClick={ () => { dispatch( deleteRequest(requestDetails._id) ) } } fullWidth variant="contained" color="primary">
                                Add Movie
                            </Button>
                        </div>
                    </div>
                </>
            }
        </form>
    );
}

export default MoviePreview;