import React from 'react'

import { NavContainer, NavbarHeading, NavbarFaBars, NavbarLinksWrapper } from './NavbarElements';
import { FaBars } from 'react-icons/fa';

/**
* @author
* @function NavbarAuth
**/

const NavbarAuth = ({ isOpen, toggleOpen }) => {

    return(
        <NavContainer style={{ justifyContent: 'space-between' }}>
            <NavbarFaBars isOpen={ isOpen } onClick={ toggleOpen }>
                <FaBars />
            </NavbarFaBars>
            <NavbarHeading to="/home" style={{ margin: '0 10px' }} >Roovie</NavbarHeading>
            <NavbarLinksWrapper>

            </NavbarLinksWrapper>
        </NavContainer>
    )
}

export default NavbarAuth;