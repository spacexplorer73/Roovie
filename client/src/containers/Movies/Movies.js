import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from 'react-router';

import { fetchMoviesBySearch, fetchLimitedMovies } from '../../actions/movieActions';

import Paginate from '../../components/UI/Pagination';
import MovieCard from './MovieCard';
import { MoviesLoader, MoviesContainer, MoviesDashboard, MoviesDashboardBottomContent, MoviesDashboardTopContent, MoviesDashboardTopContentHeading, MoviesSearchBar, MoviesSearchBottomContent, MoviesSearchButton, MoviesSearchContent, MoviesSearchHeading, MoviesSearchTopContent } from './MoviesElements';
import { FormControl, InputLabel, Select, CircularProgress } from "@material-ui/core";
import { AiFillStar } from "react-icons/ai";
import "./Movies.css";

/**
* @author
* @function Movies
**/

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const Movies = ({ clearSearch, setClearSearch }) => {
    const [search, setSearch] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState(0);
    const [rating, setRating] = useState(0);
    const { movies, allM, loading } = useSelector(state => state.movie);
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( fetchLimitedMovies(page) );
    }, [page])

    const searchMovie = () => {
        if(genre || year || rating) {
            dispatch( fetchMoviesBySearch({genre, year, rating}) )
            history.push(`/movies/search?searchQuery=${search || 'none'}&genre=${genre || 'none'}&year=${year}&rating=${rating}`);
        } else {
            history.push('/movies')
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            searchMovie();
        }
    }

    return(
        <MoviesContainer>
            <MoviesSearchContent>
                <MoviesSearchHeading>Search Your Favourite Movies</MoviesSearchHeading>
                <MoviesSearchTopContent>
                    <MoviesSearchBar
                        name="search"
                        placeholder="Search..."
                        onKeyDown={ handleKeyPress }
                        onChange={ (e) => { setSearch(e.target.value) } } 
                        value={ search }
                    />
                </MoviesSearchTopContent>
                <MoviesSearchBottomContent>

                    
                    {/* Genre */}
                    <FormControl variant="filled" style={{ margin: '0 10px' }}>
                        <InputLabel style={{ color: '#fff' }}>Genre</InputLabel>
                        <Select
                            native
                            onKeyDown={ handleKeyPress }
                            onChange={ (e) => { setGenre(e.target.value) } }
                            value={ genre }
                        >
                            <option aria-label="None" value="" />
                            <option value="Action">Action</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Sci-Fi">Sci-Fi</option>
                            <option value="Comedy">Comedy</option>
                        </Select>
                    </FormControl>


                    {/* Year */}
                    <FormControl variant="filled" style={{ margin: '0 10px' }}>
                        <InputLabel style={{ color: '#fff' }}>Year</InputLabel>
                        <Select
                            native
                            onKeyDown={ handleKeyPress }
                            onChange={ (e) => { setYear(e.target.value) } }
                            value={ year }
                        >
                            <option aria-label="None" value="" />
                            <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                            <option value={2017}>2012 - 2017</option>
                            <option value={2012}>2007 - 2012</option>
                            <option value={2007}>2000 - 2007</option>
                            
                        </Select>
                    </FormControl>


                    {/* Rating */}
                    <FormControl variant="filled" style={{ margin: '0 10px' }}>
                        <InputLabel style={{ color: '#fff' }}>Rating</InputLabel>
                        <Select
                            native
                            onKeyDown={ handleKeyPress }
                            onChange={ (e) => { setRating(e.target.value) } }
                            value={ rating }
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>9 - 10</option>
                            <option value={9}>8 - 9</option>
                            <option value={8}>7 - 8</option>
                            <option value={7}>6 - 7</option>
                            <option value={6}>&lt; 6</option>
                            
                        </Select>
                    </FormControl>
                    <MoviesSearchButton onClick={ searchMovie } style={{ margin: '0 10px' }} >Search</MoviesSearchButton>
                </MoviesSearchBottomContent>
            </MoviesSearchContent>
            { loading ? 
                <MoviesLoader>
                    <CircularProgress color="secondary" size="10rem" />
                </MoviesLoader>
                :
                <MoviesDashboard>
                    {/* loop the below div to get multiple categories */}
                    <MoviesDashboardTopContent>
                        <AiFillStar style={{ color: '#FFD700', fontSize: '2rem' }} />
                        <MoviesDashboardTopContentHeading>Recent Uploads</MoviesDashboardTopContentHeading>
                    </MoviesDashboardTopContent>
                    <MoviesDashboardBottomContent>
                        { search && allM.filter(searchedMovie => (
                            searchedMovie.title.toLowerCase().includes(search.toLowerCase())
                            )).map(movie => 
                            <MovieCard movie={ movie } key={ movie._id } />
                        )} 
                        { !search && movies.map(movie => 
                            <MovieCard movie={ movie } key={ movie._id } />
                        )} 
                    </MoviesDashboardBottomContent>
                    <Paginate page={page} />
                </MoviesDashboard>
            }
        </MoviesContainer>
    )
}

export default Movies;