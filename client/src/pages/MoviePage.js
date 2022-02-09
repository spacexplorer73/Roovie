import React, { useState } from 'react'
import FooterStart from '../components/Footer/FooterStart';

import NavbarHome from '../components/Navbar/NavbarHome';
import SidebarHome from '../components/Sidebar/SidebarHome';
import Movies from '../containers/Movies/Movies';

/**
* @author
* @function MoviePage
**/

const MoviePage = ({ page, setPage, isOpen, toggleOpen }) => {
    const [clearSearch, setClearSearch] = useState(false)

    const handleClearSearch = () => {
        setClearSearch(true)
    }

    return(
        <>
            <NavbarHome handleClearSearch={ handleClearSearch } isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <SidebarHome isOpen={ isOpen } toggleOpen={ toggleOpen } />
            <Movies page={ page } setPage={ setPage } clearSearch={ clearSearch } setClearSearch={ setClearSearch } />
            <FooterStart />
        </>
    )
}

export default MoviePage;