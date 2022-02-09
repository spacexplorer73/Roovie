import React from 'react';
import Error404 from '../components/Error/Error404';
import NavbarAuth from '../components/Navbar/NavbarAuth';

/**
* @author
* @function Error404Page
**/

const Error404Page = ({ isOpen, toggleOpen }) => {
    return(
        <>  
            <Error404 />
        </>
    );
}

export default Error404Page;