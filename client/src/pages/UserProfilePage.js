import React, { useState } from 'react';

import NavbarHome from "../components/Navbar/NavbarHome";
import SidebarHome from "../components/Sidebar/SidebarHome";
import UserProfile from '../containers/User/UserProfile';
import FooterStart from '../components/Footer/FooterStart';

/**
* @author
* @function UserProfilePage
**/

const UserProfilePage = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <UserProfile />
            <FooterStart />
        </>
    )
}

export default UserProfilePage;