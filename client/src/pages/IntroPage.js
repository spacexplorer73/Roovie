import React from 'react';
import InfoHeader from '../components/Info/InfoHeader';
import NavbarStart from '../components/Navbar/NavbarStart';
import SidebarStart from '../components/Sidebar/SidebarStart';
import FooterStart from "../components/Footer/FooterStart";

/**
* @author
* @function IntroPage
**/

const IntroPage = ({ isOpen, toggleOpen }) => {
    
    return(
        <>
            <NavbarStart isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarStart isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <InfoHeader />
            <FooterStart  />
        </>
    )
}

export default IntroPage;