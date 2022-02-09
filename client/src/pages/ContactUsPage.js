import React from "react";
import NavbarHome from "../components/Navbar/NavbarHome";
import SidebarHome from "../components/Sidebar/SidebarHome";
import ContactUs from "../components/ContactUs/ContactUs";
import FooterStart from "../components/Footer/FooterStart";

/**
* @author
* @function ContactUsPage
**/

const ContactUsPage = ({ isOpen, toggleOpen }) => {

    return(
        <>
            <NavbarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <ContactUs />
            <FooterStart />
        </>
    )
}

export default ContactUsPage;