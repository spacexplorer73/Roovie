import React from 'react';

import NavbarDashboard from "../components/Navbar/NavbarDashboard";
import MoviePreview from '../containers/Movies/MoviePreview';

/**
* @author
* @function MoviePreviewPage
**/

const MoviePreviewPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarDashboard isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <MoviePreview />
        </>
    );
}

export default MoviePreviewPage;