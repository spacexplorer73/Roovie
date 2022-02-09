import React, { useState } from 'react';

import NavbarHome from "../components/Navbar/NavbarHome";
import SidebarHome from "../components/Sidebar/SidebarHome";
import UserFavouriteMovies from '../containers/User/UserFavouriteMovies';
import FooterStart from '../components/Footer/FooterStart';

/**
* @author
* @function UserFavouriteMoviesPage
**/

const UserFavouriteMoviesPage = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <UserFavouriteMovies />
            <FooterStart />
        </>
    )
}

export default UserFavouriteMoviesPage;