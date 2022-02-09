import React from 'react';
import Register from '../auth/register';
import NavbarAuth from '../components/Navbar/NavbarAuth';

/**
* @author
* @function RegisterPage
**/

const RegisterPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarAuth isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <Register />
        </>
    );
}

export default RegisterPage;