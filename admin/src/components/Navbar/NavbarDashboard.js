import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from 'react-responsive';
import decode from 'jwt-decode';

import { logoutUser } from "../../actions/authActions";

import { useNavbarStyles } from "./styles";
import { MenuBars, NavbarHeading } from "./Elements";
import { Avatar, Button } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
/**
* @author
* @function NavbarDashboard
**/

const NavbarDashboard = ({ isOpen, toggleOpen }) => {
    const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('admin')));
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useNavbarStyles();

    const logout = () => {
        dispatch( logoutUser() );
        scroll.scrollToTop();
        // pushes user to dashboard after logging out
        history.push('/');
    }
    
    useEffect(() => {
        const token = localStorage.getItem('profile');
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setAdmin(JSON.parse(localStorage.getItem('admin')));
    }, [location]);

    return(
        <div className={classes.container}>
            <MenuBars isOpen={ isOpen } toggleOpen={ toggleOpen }>
                <MenuRoundedIcon />
            </MenuBars>
            { admin && isMobile ? 
                <Avatar style={{ display: isOpen ? 'none' : 'flex' }} className={classes.avatar} alt={admin?.username} src={'https://roovie.herokuapp.com/'+ admin?.adminProfilePicture}>{admin?.username.toUpperCase().charAt(0)}</Avatar>
                :
                <NavbarHeading 
                    isOpen={ isOpen } 
                    to="/dashboard" 
                    onClick={ () => { scroll.scrollToTop() } }
                >
                    Roovie Admin
                </NavbarHeading>
            }
            <div className={classes.linksWrapper}>
                <Link className={classes.links} to='/requests'>Requests</Link>
                <Link className={classes.links} to='/movies'>Movies</Link>
                <Link className={classes.links} to='/web-series'>Web Series</Link>
            </div>
            <div className={classes.adminAlias}>
                <Button className={classes.logoutButton} variant="contained" onClick={ logout }>Logout</Button>
            </div>
        </div>
    );
}

export default NavbarDashboard;