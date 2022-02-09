import React, { useState } from 'react';

import NavbarHome from "../components/Navbar/NavbarHome";
import SidebarHome from "../components/Sidebar/SidebarHome";
import UserMyMovies from '../containers/User/UserMyMovies';
import FooterStart from '../components/Footer/FooterStart';

/**
* @author
* @function UserMyMoviesPage
**/

const UserMyMoviesPage = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <UserMyMovies />
            <FooterStart />
        </>
    )
}

export default UserMyMoviesPage;