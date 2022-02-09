import React from 'react';
import { useSelector } from "react-redux";

import MovieCard from '../Movies/MovieCard';
import { UserMoviesContainer, UserMoviesHeader, UserMoviesHeading, UserMoviesBody } from "./UserProfileElements";

/**
* @author
* @function UserMyMovies
**/

const UserMyMovies = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { allM, loading } = useSelector(state => state.movie);

    return(
        <UserMoviesContainer>
            <UserMoviesHeader>
                <UserMoviesHeading>My Movies</UserMoviesHeading>
            </UserMoviesHeader>
            <UserMoviesBody>
                { allM.map(movie =>
                    (movie.createdBy === user._id) ?
                        <MovieCard movie={ movie } key={ movie._id } />
                        :
                        null
                )}
            </UserMoviesBody>
        </UserMoviesContainer>
    )
}

export default UserMyMovies;