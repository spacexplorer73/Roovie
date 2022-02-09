import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../../actions/authActions';

import { SidebarButtonWrapper, SidebarButton, SidebarContainer, SidebarHeader, SidebarCloseBtn, SidebarHeading, SidebarHr, SidebarLink, SidebarLinksWrapper } from './SidebarElements';
import { FaWindowClose } from "react-icons/fa";
import { Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

/**
* @author
* @function SidebarHome
**/

const useStyles = makeStyles({
    flexContainer: {
        display: 'flex'
    },
    flexStart: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '10px 0',
        cursor: 'pointer'
    },
    columnFlex: {
        display: 'flex',
        flexDirection: 'column'
    },
    rootMargin: {
        margin: '10px'
    },
    username: {
        margin: '10px',
        ['@media (max-width: 768px)']: {
            fontSize: '1.8rem'
        }
    },
    buttonSize: {
        margin: '10px',
        fontSize: '18px'
    },
    avatar: {
        margin: '10px',
        color: '#333'
    }
})

const SidebarHome = ({ isOpen, toggleOpen }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const openUser = () => {
        toggleOpen();
        window.location.assign(`/user/${user._id}`);
    }

    const logout = () => {
        dispatch( logoutUser() );
        // pushes user to home after logging out
        window.location.assign('/home');
    }

    return(
        <SidebarContainer isOpen={ isOpen }>
            <SidebarHeader>
                <SidebarHeading to="/home" onClick={ toggleOpen }>Roovie</SidebarHeading>
                <SidebarCloseBtn onClick={ toggleOpen }>
                    <FaWindowClose />
                </SidebarCloseBtn>
            </SidebarHeader>
            { user ?
                    <>
                        <div className={classes.flexStart}>
                            <Avatar onClick={ openUser } className={classes.avatar} alt={user?.username} src={'https://roovie.herokuapp.com/' + user?.userProfilePicture} >{user?.username.toUpperCase().charAt(0)}</Avatar>
                            <Typography onClick={ openUser } className={classes.username} variant="h4">{user?.username}</Typography>
                        </div>
                    </>
                :
                    null
                }
            <SidebarHr />
            <SidebarLinksWrapper onClick={ toggleOpen }>
                <SidebarLink to="/movies">Movies</SidebarLink>
                <SidebarLink to="/web-series">Web Series</SidebarLink>
                <SidebarLink to="/tv-shows">TV Shows</SidebarLink>
                <SidebarLink to="/drama">Drama</SidebarLink>
            </SidebarLinksWrapper>
            <SidebarButtonWrapper>
                {user ? (
                    <div className={classes.columnFlex}>
                        <div className={classes.flexContainer}>
                            <Button size="large" className={classes.buttonSize} variant="contained" color="secondary" onClick={ logout }>Logout</Button>
                        </div>
                    </div>
                    ) : (
                        <SidebarButton onClick={ () => { window.location.assign('/login') } }>Login</SidebarButton>
                )}
            </SidebarButtonWrapper>
        </SidebarContainer>
    )
}

export default SidebarHome;