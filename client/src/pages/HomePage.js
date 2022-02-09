import React from "react";
import FooterStart from "../components/Footer/FooterStart";
import InfoBody from "../components/Info/InfoBody";
import NavbarHome from "../components/Navbar/NavbarHome";
import SidebarHome from "../components/Sidebar/SidebarHome";

/**
* @author
* @function HomePage
**/

const HomePage = ({ isOpen, toggleOpen }) => {

    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <InfoBody />
            <FooterStart />
        </>
    )
}

export default HomePage;