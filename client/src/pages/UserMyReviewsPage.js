import React, { useState } from 'react';

import NavbarHome from "../components/Navbar/NavbarHome";
import SidebarHome from "../components/Sidebar/SidebarHome";
import UserMyReviews from '../containers/User/UserMyReviews';
import FooterStart from '../components/Footer/FooterStart';

/**
* @author
* @function UserMyReviewsPage
**/

const UserMyReviewsPage = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <UserMyReviews />
            <FooterStart />
        </>
    )
}

export default UserMyReviewsPage;