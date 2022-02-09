import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";

import { useNavbarStyles } from './styles';
import { MenuBars, NavbarHeading } from "./Elements";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

/**
* @author
* @function NavbarAuth
**/

const NavbarAuth = ({ isOpen, toggleOpen }) => {
    const classes = useNavbarStyles();

    return(
        <div className={classes.container}>
            <MenuBars isOpen={ isOpen } toggleOpen={ toggleOpen }>
                <MenuRoundedIcon />
            </MenuBars>
            <NavbarHeading 
                isOpen={ isOpen } 
                to="/" 
                onClick={ () => { scroll.scrollToTop() } }
            >
                Roovie Admin
            </NavbarHeading>
            <div className={classes.linksWrapper}>
                <Link to='/' className={classes.links}>Login</Link>
                <Link to='/register' className={classes.links}>Register</Link>
            </div>
        </div>
    );
}

export default NavbarAuth;