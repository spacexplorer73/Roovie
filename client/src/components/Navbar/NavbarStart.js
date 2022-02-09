import React from 'react'
import { Link } from "react-router-dom";

import { FaBars } from 'react-icons/fa';
import { NavContainer, NavbarButton, NavbarHeading, NavbarFaBars, NavbarLink, NavbarLinksWrapper } from './NavbarElements';

/**
* @author
* @function NavbarStart
**/

const NavbarStart = ({ isOpen, toggleOpen }) => {
    return(
        <NavContainer>
            <NavbarFaBars isOpen={ isOpen } onClick={ toggleOpen }>
                <FaBars />
            </NavbarFaBars>
            <NavbarHeading to="/">Roovie</NavbarHeading>
            <NavbarLinksWrapper>
                <NavbarLink to="/aboutus">About Us</NavbarLink>
                <NavbarLink to="/privacy">Privacy</NavbarLink>
                <NavbarLink to="/contactus">Contact Us</NavbarLink>
            </NavbarLinksWrapper>
            {/* Find a better way for this 👇 (wrapping button with link) */}
            <Link to='/home'><NavbarButton>Get Started</NavbarButton></Link>
        </NavContainer>
    )
}

export default NavbarStart;