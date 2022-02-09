import React from 'react';
import { useSelector } from "react-redux";

import MovieCard from '../Movies/MovieCard';
import { UserMoviesContainer, UserMoviesHeader, UserMoviesHeading, UserMoviesBody } from "./UserProfileElements";

/**
* @author
* @function UserFavouriteMovies
**/

const UserFavouriteMovies = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { allM, loading } = useSelector(state => state.movie);

    return(
        <UserMoviesContainer>
            <UserMoviesHeader>
                <UserMoviesHeading>Favourite Movies</UserMoviesHeading>
            </UserMoviesHeader>
            <UserMoviesBody>
                { allM.map(movie => 
                    (movie.likes.find((id) => id === user._id)) ?
                    <MovieCard movie={ movie } key={ movie._id } />
                    :
                    null
                )}
            </UserMoviesBody>
        </UserMoviesContainer>
    )
}

export default UserFavouriteMovies;