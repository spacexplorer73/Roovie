import React from 'react';

import NavbarAuth from "../components/Navbar/NavbarAuth";
import SidebarAuth from "../components/Sidebar/SidebarAuth";
import Register from "../auth/register";

/**
* @author
* @function RegisterPage
**/

const RegisterPage = ({ isOpen, toggleOpen }) => {
    
    return(
        <>
            <NavbarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <Register />
        </>
    )
}

export default RegisterPage;