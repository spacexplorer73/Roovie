import React from 'react'

import { SidebarButtonWrapper, SidebarButton, SidebarContainer, SidebarHeader, SidebarCloseBtn, SidebarHeading, SidebarHr, SidebarLink, SidebarLinksWrapper } from './SidebarElements';
import { FaWindowClose } from "react-icons/fa";

/**
* @author
* @function SidebarAuth
**/

const SidebarAuth = ({ isOpen, toggleOpen }) => {
    return(
        <SidebarContainer 
            style={{
                justifyContent: 'flex-start'    
            }} 
            isOpen={ isOpen }
        >
            <SidebarHeader>
                <SidebarHeading to="/home" onClick={ toggleOpen }>Roovie</SidebarHeading>
                <SidebarCloseBtn onClick={ toggleOpen }>
                    <FaWindowClose />
                </SidebarCloseBtn>
            </SidebarHeader>
            <SidebarHr />
            <SidebarLinksWrapper onClick={ toggleOpen }>
                
            </SidebarLinksWrapper>
        </SidebarContainer>
    )
}

export default SidebarAuth;