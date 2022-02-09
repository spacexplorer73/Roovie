import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from '../../actions/authActions';
import { fetchAllMovies, fetchPreview } from '../../actions/movieActions';
import { createRequest } from '../../actions/requestActions';
import ReviewCard from "../Reviews/ReviewCard";
import MovieCard from "../Movies/MovieCard";

import { UserProfileLoader, UserProfileContainer, UserProfileTopContent, UserProfileMiddleContent, UserProfileBottomContent, UserProfileContent, UserProfileReviewSection, UserProfileImageContent, UserProfileMovies, UserProfileMoviesWrapper, UserProfileInfoContent, UserProfileAddMovie, UserProfileSubContent, UserProfileAddMovieWrapper, UserProfileHeading, UserProfileInputWrapper, UserProfileViewAllButton } from "./UserProfileElements";
import { Avatar, TextField, Paper, Button, CircularProgress, Modal, Container, Typography, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import useStyles from "./styles";

/**
* @author
* @function UserProfile
**/

const initialState = { title: '', description: '', genre: '', year: null, rating: 5, type: '' };

const UserProfile = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [formData, setFormData] = useState(initialState);
    const [userProfilePicture, setUserProfilePicture] = useState('');
    const [open, setOpen] = useState(false);
    const { allM, loading } = useSelector(state => state.movie);
    const { isSubmit } = useSelector(state => state.request);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch( fetchPreview(1) );
    }, [])

    useEffect(() => {
        dispatch( fetchAllMovies() )
    }, [])

    const toggleYourReviews = () => {
        scroll.scrollToTop();
        history.push(`/user=${user._id}/myreviews`);
    }

    const toggleYourMovies = () => {
        scroll.scrollToTop();
        history.push(`/user=${user._id}/mymovies`);
    }

    const toggleFavouriteMovies = () => {
        scroll.scrollToTop();
        history.push(`/user=${user._id}/favouritemovies`);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const profileUpdateForm = new FormData();
        profileUpdateForm.append('email', user?.email);
        profileUpdateForm.append('username', user?.username);
        profileUpdateForm.append('userProfilePicture', userProfilePicture);
        
        dispatch( updateUserProfile(user._id, profileUpdateForm) );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formData);
        dispatch( createRequest(formData) );
        scroll.scrollToTop();
    }

    return(
        <UserProfileContainer>
            {/* user profile TOP content */}
            <UserProfileTopContent>
                <UserProfileImageContent className={classes.container}>
                    <Avatar className={classes.largeAvatar} src={(user.userProfilePicture) ? ('https://roovie.herokuapp.com/' + user.userProfilePicture) : 'https://www.w3schools.com/html/img_chania.jpg'} alt={user?.username} variant="square" />
                    <div className={classes.overlay}>
                        <button className={classes.overlayButton} onClick={ () => { setOpen(true) } }>Edit</button>
                    </div>
                    <Modal
                        open={ open }
                        onClose={ () => { setOpen(false) } }
                    >
                        <Container className={classes.profileUpdateContainer}>
                            <Paper className={classes.profileUpdate} elevation={6}>
                                <div className={classes.flexContainer}>
                                    <Typography className={classes.colorAndMargin} variant="h5">Update Profile Picture</Typography>
                                    <CloseOutlinedIcon onClick={ () => { setOpen(false) } } style={{ cursor: 'pointer' }} />
                                </div>
                                <TextField
                                    type="file"
                                    variant="filled"
                                    fullWidth
                                    label="Select Profile Picture"
                                    filename="userProfilePicture"
                                    multiple={false}
                                    onChange={ (e) => { setUserProfilePicture(e.target.files[0]) } }
                                    id="userProfilePicture"
                                    InputProps={{
                                        className: classes.textFieldColor
                                    }} 
                                    InputLabelProps={{
                                        shrink: true,
                                        className: classes.textFieldColor
                                    }}
                                />
                                <Button fullWidth className={classes.colorAndMargin} onClick={ handleUpdate } variant="contained" color="secondary">
                                    { (auth.loading) ? 
                                        <CircularProgress size="0.5rem" />
                                        :
                                        'Save'
                                    }
                                </Button>
                            </Paper>
                        </Container>
                    </Modal>
                </UserProfileImageContent>
                <UserProfileInfoContent>
                    <UserProfileHeading>Welcome,<Paper className={classes.paper} elevation={3}> {user?.username}!</Paper></UserProfileHeading>
                    <UserProfileSubContent>
                        <TextField 
                            fullWidth
                            className={classes.textField}
                            value={user?.email}
                            label="Email" 
                            variant="filled" 
                            InputLabelProps={{
                                className: classes.textFieldColor
                            }}
                            InputProps={{
                                className: classes.textFieldColor
                            }}
                        />
                    </UserProfileSubContent>
                </UserProfileInfoContent>
            </UserProfileTopContent>


            {/* user profile MIDDLE content */}
            <UserProfileMiddleContent>

                {/* middle LEFT part */}
                <UserProfileContent style={{ marginRight: '20px' }}>
                    { isSubmit ? 
                        <UserProfileHeading>
                            Your Request has been Submitted!
                        </UserProfileHeading>
                        :
                        <UserProfileAddMovie onSubmit={ handleSubmit } encType="multipart/form-data">
                            <UserProfileHeading>Request A Movie or Web Series</UserProfileHeading>
                                <UserProfileAddMovieWrapper>
                                    <UserProfileInputWrapper>
                                        <FormControl fullWidth variant="filled">
                                            <InputLabel className={classes.formControlLabel}>Type</InputLabel>
                                            <Select
                                                onChange={ (e) => { setFormData({ ...formData, type: e.target.value }) } }
                                                value={ formData.type }
                                                id="type"
                                                className={classes.formControlOptions}
                                            >
                                                <MenuItem value={'Movie'}>Movie</MenuItem>
                                                <MenuItem value={'WebSeries'}>Web-Series</MenuItem>
                                                <MenuItem value={'Drama'}>Drama</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </UserProfileInputWrapper>
                                    <UserProfileInputWrapper>
                                        <TextField 
                                            fullWidth
                                            onChange={ handleChange }
                                            value={formData.title}
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
                                    </UserProfileInputWrapper>
                                    <UserProfileInputWrapper>
                                        <TextField 
                                            fullWidth
                                            onChange={ handleChange }
                                            value={formData.description}
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
                                    </UserProfileInputWrapper>
                                    <UserProfileInputWrapper>
                                        <TextField 
                                            fullWidth
                                            onChange={ handleChange }
                                            value={formData.genre}
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
                                    </UserProfileInputWrapper>
                                    <UserProfileInputWrapper>
                                        <TextField 
                                            fullWidth
                                            onChange={ handleChange }
                                            value={formData.year}
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
                                    </UserProfileInputWrapper>
                                    <UserProfileInputWrapper>
                                        <TextField 
                                            fullWidth
                                            onChange={ handleChange }
                                            value={formData.rating}
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
                                    </UserProfileInputWrapper>
                                    <UserProfileInputWrapper>
                                        <Button type="submit" fullWidth variant="contained" color="primary">
                                            Request {formData.type}
                                        </Button>
                                    </UserProfileInputWrapper>
                                </UserProfileAddMovieWrapper>
                        </UserProfileAddMovie>
                    }
                </UserProfileContent>


                {/* middle RIGHT part */}
                <UserProfileContent>
                    <UserProfileReviewSection>
                        <UserProfileHeading>Your Comments</UserProfileHeading>
                            { loading ?
                                <UserProfileLoader>
                                    <CircularProgress color="secondary" size="5rem" />
                                </UserProfileLoader>
                                :
                                <UserProfileAddMovieWrapper>
                                    { allM.filter(movie => movie.review.find(name => name?.split(' -')[0] === user?.username)).slice(0, 5).map(movie => 
                                        <ReviewCard movie={ movie } key={ movie._id } />
                                    )}
                                </UserProfileAddMovieWrapper>
                            }
                            <UserProfileViewAllButton>
                                <Button onClick={ toggleYourReviews } color="secondary">
                                    Click Here to View All
                                </Button>
                            </UserProfileViewAllButton>
                    </UserProfileReviewSection>
                </UserProfileContent>
            </UserProfileMiddleContent>



            {/*MOVIES ADDED BY YOU - user profile BOTTOM content 1 */}
            <UserProfileBottomContent>
                <UserProfileContent>
                    <UserProfileMoviesWrapper>
                        <UserProfileHeading>Movies Added By You</UserProfileHeading>
                        { loading ?
                            <UserProfileLoader>
                                <CircularProgress color="secondary" size="5rem" />
                            </UserProfileLoader>
                            :
                            <UserProfileMovies>
                                { allM.filter(movie => movie.createdBy === user._id).slice(0, 5).map(movie =>
                                    <MovieCard movie={ movie } key={ movie._id } />
                                )}
                            </UserProfileMovies>
                        }
                        <UserProfileViewAllButton>
                            <Button onClick={ toggleYourMovies } color="secondary">
                                Click Here to View All
                            </Button>
                        </UserProfileViewAllButton>
                    </UserProfileMoviesWrapper>
                </UserProfileContent>
            </UserProfileBottomContent>



            {/*YOUR FAVOURITE MOVIES - user profile BOTTOM content 2 */}
            <UserProfileBottomContent>
                <UserProfileContent>
                    <UserProfileMoviesWrapper>
                        <UserProfileHeading>Your Favourite Movies</UserProfileHeading>
                        { loading ?
                            <UserProfileLoader>
                                <CircularProgress color="secondary" size="5rem" />
                            </UserProfileLoader>
                            :
                            <UserProfileMovies>
                                { allM.filter(movie => movie.likes.find((id) => id === user._id)).slice(0, 5).map(movie => 
                                    <MovieCard movie={ movie } key={ movie._id } />
                                )}
                            </UserProfileMovies>
                        }
                        <UserProfileViewAllButton>
                            <Button onClick={ toggleFavouriteMovies } color="secondary">
                                Click Here to View All
                            </Button>
                        </UserProfileViewAllButton>
                    </UserProfileMoviesWrapper>
                </UserProfileContent>
            </UserProfileBottomContent>
        </UserProfileContainer>
    )
}

export default UserProfile;