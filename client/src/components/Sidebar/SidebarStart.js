import React from 'react'
import { Link } from "react-router-dom";

import { SidebarButtonWrapper, SidebarButton, SidebarContainer, SidebarHeader, SidebarCloseBtn, SidebarHeading, SidebarHr, SidebarLink, SidebarLinksWrapper } from './SidebarElements';
import { FaWindowClose } from "react-icons/fa";

/**
* @author
* @function SidebarStart
**/

const SidebarStart = ({ isOpen, toggleOpen }) => {
    return(
        <SidebarContainer isOpen={ isOpen }>
            <SidebarHeader>
                <SidebarHeading to="/">Roovie</SidebarHeading>
                <SidebarCloseBtn onClick={ toggleOpen }>
                    <FaWindowClose />
                </SidebarCloseBtn>
            </SidebarHeader>
            <SidebarHr />
            <SidebarLinksWrapper onClick={ toggleOpen }>
                <SidebarLink to="/aboutus">About Us</SidebarLink>
                <SidebarLink to="/privacy">Privacy</SidebarLink>
                <SidebarLink to="/contactus">Contact Us</SidebarLink>
            </SidebarLinksWrapper>
            <SidebarButtonWrapper>
                <SidebarButton onClick={ () => { window.location.assign('/home') } }>Get Started</SidebarButton>
            </SidebarButtonWrapper>
        </SidebarContainer>
    )
}

export default SidebarStart;