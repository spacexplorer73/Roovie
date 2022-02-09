import React from 'react'
import FooterStart from '../components/Footer/FooterStart';
import NavbarHome from '../components/Navbar/NavbarHome';
import SidebarHome from '../components/Sidebar/SidebarHome';
import MovieDetails from '../containers/Movies/MovieDetails/MovieDetails';

/**
* @author
* @function MovieDetailsPage
**/

const MovieDetailsPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <MovieDetails />
            <FooterStart />
        </>
    )
}

export default MovieDetailsPage;