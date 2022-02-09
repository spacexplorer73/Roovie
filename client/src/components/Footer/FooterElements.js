import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterStartContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: #333;
    overflow: hidden;
`

export const FooterStartTopContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 50px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }
`

export const FooterStartLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    align-items: center;

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;
    }
`

export const FooterStartLogo = styled(Link)`
    font-size: 2.5rem;
    color: #f9f9f9;
`

export const FooterStartNewsLetter = styled.form`
    color: #f9f9f9;
`

export const FooterStartNewsLetterCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const FooterStartNewsLetterHeading = styled.h1`
    @media screen and (max-width: 768px) {
        font-size: 1.7rem;
    }
`

export const FooterStartNewsLetterInputWrapper = styled.div`
    width: 100%;
    margin: 10px 0;
`

export const FooterStartNewsLetterP = styled.p`
    font-weight: 600;
`

export const FooterStartMiddleContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const FooterStartLink = styled(Link)`
    text-decoration: none !important;
    color: #f9f9f9;
    margin: 0 20px;

    &:hover {
        color: gray
    }
`

export const FooterStartBottomContent = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
`

export const FooterStartCopyright = styled.div`
    color: #f9f9f9;
`

export const FooterStartHr = styled.hr`
    background: gray;
    width: 100%;
`