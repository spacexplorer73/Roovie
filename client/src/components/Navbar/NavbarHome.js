import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { logoutUser } from '../../actions/authActions';

import { NavContainer, NavbarButton, NavbarHeading, NavbarFaBars, NavbarLink, NavbarLinksWrapper, NavbarUserAlias } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

/**
* @author
* @function NavbarHome
**/

const useStyles = makeStyles({
    rootMargin: {
        margin: '10px'
    },
    avatar: {
        margin: '10px',
        color: '#333'
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    }
})

const NavbarHome = ({ isOpen, toggleOpen }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const handleScrollToTop = () => {
        scroll.scrollToTop();
    }
    
    const openUser = () => {
        scroll.scrollToTop();
        window.location.assign(`/user/${user._id}`);
    }

    const logout = () => {
        dispatch(logoutUser());
        scroll.scrollToTop();
        // pushes user to home after logging out
        history.push('/home');
    }

    useEffect(() => {
        const token = localStorage.getItem('profile');
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('user')));
    }, [location]);

    return(
        <NavContainer>
            <NavbarFaBars isOpen={ isOpen } onClick={ toggleOpen }>
                <FaBars />
            </NavbarFaBars>
            {user && isMobile ? 
                <Avatar style={{ display: isOpen ? 'none' : 'inline-block', cursor: 'pointer' }} onClick={ openUser } className={classes.avatar} alt={user?.username} src={'https://roovie.herokuapp.com/'+ user?.userProfilePicture}>{user?.username.toUpperCase().charAt(0)}</Avatar>
                :
                <NavbarHeading isOpen={ isOpen } to="/home" onClick={ handleScrollToTop }>Roovie</NavbarHeading>
            }
            <NavbarLinksWrapper>
                <NavbarLink to="/movies" onClick={ handleScrollToTop } >Movies</NavbarLink>
                <NavbarLink to="/web-series" onClick={ handleScrollToTop } >Web Series</NavbarLink>
                <NavbarLink to="/tv-shows" onClick={ handleScrollToTop } >TV Shows</NavbarLink>
                <NavbarLink to="/drama" onClick={ handleScrollToTop } >Drama</NavbarLink>
            </NavbarLinksWrapper>
            <NavbarUserAlias>
                {user ? (
                    <div className={classes.userInfo}>
                        <Avatar onClick={ openUser } className={classes.avatar} alt={user?.username} src={'https://roovie.herokuapp.com/'+ user?.userProfilePicture}>{user?.username.toUpperCase().charAt(0)}</Avatar>
                        <Typography onClick={ openUser } className={classes.rootMargin} variant="h6">{user?.username}</Typography>
                        <Button className={classes.rootMargin} variant="contained" color="secondary" onClick={ logout }>Logout</Button>
                    </div>
                    ) : (
                        <Link to='/login'><NavbarButton>Login</NavbarButton></Link>
                )}
            </NavbarUserAlias>
        </NavContainer>
    )
}

export default NavbarHome;