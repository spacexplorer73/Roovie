import React from "react";
import NavbarAuth from "../components/Navbar/NavbarAuth";
import SidebarAuth from "../components/Sidebar/SidebarAuth";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import FooterStart from "../components/Footer/FooterStart";

/**
* @author
* @function PrivacyPolicyPage
**/

const PrivacyPolicyPage = ({ isOpen, toggleOpen }) => {

    return(
        <>
            <NavbarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <PrivacyPolicy />
            <FooterStart />
        </>
    )
}

export default PrivacyPolicyPage;