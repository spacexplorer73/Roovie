import React from 'react';
import { useSelector } from "react-redux";

import MovieCard from '../../containers/Movies/MovieCard';
import { InfoBodyLoader, InfoBodyBottomContent, InfoBodyContainer, InfoBodyHeading, InfoBodyTopContent, InfoBodyWelcome, InfoBodyWelcomeHeading, InfoBodyWelcomeP } from './InfoElements';
import { CircularProgress } from "@material-ui/core";
import { AiFillStar } from "react-icons/ai";

/**
* @author
* @function InfoBody
**/

const InfoBody = (props) => {
    const { allM, loading } = useSelector(state => state.movie);

    const avengersMovies = allM.filter(({title}) => title.includes("Avengers") === true);
    const mazeRunnerMovies = allM.filter(({title}) => title.includes("Maze Runner") === true);

    return(
        <InfoBodyContainer>
            <InfoBodyWelcome>
                <InfoBodyWelcomeHeading>Welcome to Roovie</InfoBodyWelcomeHeading>
                <InfoBodyWelcomeP>This is a fun site made to gossip upon your favourite movie and to swear upon your least favourite one!<br />From Plot Twists to Consipiracy Theories you can discuss anything here!</InfoBodyWelcomeP>
            </InfoBodyWelcome>

            { loading ?  
                <InfoBodyLoader>
                    <CircularProgress color="secondary" size="10rem" />
                </InfoBodyLoader>
                :
                <>
                {/* Latest Uploads */}
                <InfoBodyTopContent>
                    <AiFillStar style={{ color: '#FFD700', fontSize: '2rem' }} />
                    <InfoBodyHeading>
                        Latest Uploads
                    </InfoBodyHeading>
                </InfoBodyTopContent>
                <InfoBodyBottomContent>
                    {/* loop this component to show cards*/}
                    {
                        allM.slice(0, 15).map(movie => 
                            <MovieCard movie={movie} key={ movie._id } />
                        )
                    }
                </InfoBodyBottomContent>


                {/* Avengers Movies */}
                <InfoBodyTopContent>
                    <AiFillStar style={{ color: '#FFD700', fontSize: '2rem' }} />
                    <InfoBodyHeading>
                        The Avengers
                    </InfoBodyHeading>
                </InfoBodyTopContent>
                <InfoBodyBottomContent>
                    {/* loop this component to show cards*/}
                    {
                        avengersMovies.map(movie => 
                            <MovieCard movie={movie} key={ movie._id } />
                        )
                    }
                </InfoBodyBottomContent>


                {/* Maze Runner Trilogy Movies */}
                <InfoBodyTopContent>
                    <AiFillStar style={{ color: '#FFD700', fontSize: '2rem' }} />
                    <InfoBodyHeading>
                        Maze Runner - Trilogy
                    </InfoBodyHeading>
                </InfoBodyTopContent>
                <InfoBodyBottomContent>
                    {/* loop this component to show cards*/}
                    {
                        mazeRunnerMovies.map(movie => 
                            <MovieCard movie={movie} key={ movie._id } />
                        )
                    }
                </InfoBodyBottomContent>
                </>
            }
        </InfoBodyContainer>
    )
}

export default InfoBody;