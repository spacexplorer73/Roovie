import React from 'react';

import NavbarDashboard from "../components/Navbar/NavbarDashboard";
import Requests from '../containers/Requests/Requests';

/**
* @author
* @function RequestsPage
**/

const RequestsPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarDashboard isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <Requests />
        </>
    );
}

export default RequestsPage;