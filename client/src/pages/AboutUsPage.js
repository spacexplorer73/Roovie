import React from "react";
import NavbarHome from "../components/Navbar/NavbarHome";
import SidebarHome from "../components/Sidebar/SidebarHome";
import AboutUs from "../components/AboutUs/AboutUs";
import FooterStart from "../components/Footer/FooterStart";

/**
* @author
* @function AboutUsPage
**/

const AboutUsPage = ({ isOpen, toggleOpen }) => {

    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <AboutUs />
            <FooterStart />
        </>
    )
}

export default AboutUsPage;