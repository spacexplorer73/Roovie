import React from 'react';
import { useSelector } from "react-redux";

import ReviewCard from '../Reviews/ReviewCard';
import { UserMoviesContainer, UserMoviesHeader, UserMoviesHeading, UserReviewsBody } from "./UserProfileElements";

/**
* @author
* @function UserMyReviews
**/

const UserMyReviews = (props) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { allM, loading } = useSelector(state => state.movie);

    return(
        <UserMoviesContainer>
            <UserMoviesHeader>
                <UserMoviesHeading>My Reviews</UserMoviesHeading>
            </UserMoviesHeader>
            <UserReviewsBody>
                { allM.filter(movie => movie.review.find(name => name?.split(' -')[0] === user?.username)).map(movie => 
                    <ReviewCard movie={ movie } key={ movie._id } />
                )}
            </UserReviewsBody>
        </UserMoviesContainer>
    )
}

export default UserMyReviews;