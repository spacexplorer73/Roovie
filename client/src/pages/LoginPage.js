import React from 'react';

import NavbarAuth from "../components/Navbar/NavbarAuth";
import SidebarAuth from "../components/Sidebar/SidebarAuth";
import Login from "../auth/login";

/**
* @author
* @function LoginPage
**/

const LoginPage = ({ isOpen, toggleOpen }) => {
    
    return(
        <>
            <NavbarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <Login />
        </>
    )
}

export default LoginPage;