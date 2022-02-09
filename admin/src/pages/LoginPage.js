import React from 'react';

import Login from '../auth/login';
import NavbarAuth from '../components/Navbar/NavbarAuth';

/**
* @author
* @function LoginPage
**/

const LoginPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <Login />
        </>
    );
}

export default LoginPage;