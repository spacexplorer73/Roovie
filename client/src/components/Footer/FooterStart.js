import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import { FooterStartContainer, FooterStartTopContent, FooterStartLogoContainer, FooterStartLogo, FooterStartNewsLetter, FooterStartNewsLetterCard, FooterStartNewsLetterHeading, FooterStartNewsLetterInputWrapper, FooterStartNewsLetterP, FooterStartMiddleContent, FooterStartLink, FooterStartBottomContent, FooterStartCopyright, FooterStartHr } from "./FooterElements";
import { Button, TextField } from "@material-ui/core";
import roovie from "../../images/logo.png";
import { sendMail } from '../../actions/mailActions';

/**
* @author
* @function FooterStart
**/

const FooterStart = (props) => {
    const [newsletterData, setNewsletterData] = useState({ email: '' });
    const { sendMailSuccess } = useSelector(state => state.mail);
    const dispatch = useDispatch();

    const handleScroll = () => {
        scroll.scrollToTop();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch( sendMail(newsletterData) );
    }

    return(
        <FooterStartContainer>
            <FooterStartTopContent>
                <FooterStartLogoContainer>
                    <FooterStartLogo onClick={ handleScroll }><img src={roovie} alt="Roovie" /></FooterStartLogo>
                </FooterStartLogoContainer>
                <FooterStartNewsLetter onSubmit={ handleSubmit } encType="multipart/form-data">
                    { sendMailSuccess === 'success' ?
                    <FooterStartNewsLetterCard>
                        <FooterStartNewsLetterHeading>Welcome to Roovie!<br />Thank you for subscribing to our newsletter 😌<br/><span></span></FooterStartNewsLetterHeading>
                    </FooterStartNewsLetterCard>
                    :
                    <>
                        <FooterStartNewsLetterHeading>Have Trouble Searching Movies?</FooterStartNewsLetterHeading>
                        <FooterStartNewsLetterInputWrapper>
                            <TextField 
                                fullWidth
                                onChange={ (e) => { setNewsletterData({ ...newsletterData, [e.target.id]: e.target.value }) } }
                                value={newsletterData.email}
                                id="email"
                                label="Email Address" 
                                variant="filled" 
                                inputProps={{
                                    style: { color: '#f9f9f9' }
                                }}
                                InputLabelProps={{
                                    style: { color: 'gray' }
                                }}
                            />
                        </FooterStartNewsLetterInputWrapper>
                        <FooterStartNewsLetterInputWrapper>
                            <Button 
                                fullWidth
                                type="submit"
                                variant="contained" 
                                style={{ background: 'gray' }}
                            >
                                Submit
                            </Button>
                        </FooterStartNewsLetterInputWrapper>
                        <FooterStartNewsLetterP>
                            Subscribe to Roovie's Newsletter on latest upcoming Movies, Web Series and TV Shows!
                        </FooterStartNewsLetterP>
                    </>
                    }
                </FooterStartNewsLetter>
            </FooterStartTopContent>
            <FooterStartHr />
            <FooterStartMiddleContent>
                <FooterStartLink to="/aboutus" onClick={ handleScroll }>About Us</FooterStartLink>
                <FooterStartLink to="/privacy" onClick={ handleScroll }>Privacy Policy</FooterStartLink>
                <FooterStartLink to="/contactus" onClick={ handleScroll }>Contact Us</FooterStartLink>
            </FooterStartMiddleContent>
            <FooterStartHr />
            <FooterStartBottomContent>
                <FooterStartCopyright>Copyright &copy; 2021 <span style={{ fontFamily: 'Caveat', fontSize: '1.5rem' }}>Roovie</span>. All Rights Reserved</FooterStartCopyright>
            </FooterStartBottomContent>
        </FooterStartContainer>
    )
}

export default FooterStart;