import React from 'react';

import NavbarDashboard from "../components/Navbar/NavbarDashboard";
import Dashboard from '../components/Dashboard/Dashboard';

/**
* @author
* @function DashboardPage
**/

const DashboardPage = ({ isOpen, toggleOpen }) => {
    return(
        <>
            <NavbarDashboard isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <Dashboard />
        </>
    );
}

export default DashboardPage;