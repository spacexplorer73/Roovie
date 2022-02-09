import React from 'react'
import { Link } from "react-router-dom";

import { InfoHeaderButton, InfoHeaderButtonWrapper, InfoHeaderContainer, InfoHeaderHeading, InfoHeaderLeftContent, InfoHeaderP, InfoHeaderRightContent, InfoHeaderHr } from './InfoElements';
import logo from "../../images/logo.png";

/**
* @author
* @function InfoHeader
**/

const InfoHeader = (props) => {
    return(
        <InfoHeaderContainer>
            <InfoHeaderLeftContent>
                <InfoHeaderHeading>
                    Roovie
                    <img src={logo} />    
                </InfoHeaderHeading>
            </InfoHeaderLeftContent>
            <InfoHeaderHr />
            <InfoHeaderRightContent>
                <InfoHeaderP>A moview review platform, where movies are reviewed and rated by the people themselves. Our all new RoovieMeter helps you decide what to watch and what to skip. </InfoHeaderP>
                <InfoHeaderButtonWrapper>
                    {/* Find a better way for this 👇 (wrapping button with link) */}
                    <Link to='/home'><InfoHeaderButton>Get Started</InfoHeaderButton></Link>
                    <Link to='/aboutus'><InfoHeaderButton>More Information</InfoHeaderButton></Link>
                </InfoHeaderButtonWrapper>
            </InfoHeaderRightContent>
        </InfoHeaderContainer>
    )
}

export default InfoHeader;