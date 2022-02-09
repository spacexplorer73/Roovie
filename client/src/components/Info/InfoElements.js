import styled from "styled-components";

// Info Header Elements

export const InfoHeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: calc(75vh - 100px);
    width: 70%;
    margin: 25vh auto 14vh;
    background: rgb(72, 180, 243, 0.2);
    border: 1px solid #333;
    border-radius: 20px;
    padding: 20px 60px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: 15vh;
    }
`

export const InfoHeaderLeftContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 100%;

    @media screen and (max-width: 768px) {
        height: 40%;
        justify-content: center;
    }
`

export const InfoHeaderHr = styled.hr`
    height: 2px;
    background: #333;
    width: 100%;
    transform: rotate(90deg);

    @media screen and (max-width: 768px) {
        transform: rotate(0deg)
    }
`

export const InfoHeaderRightContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 400px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        height: 60%;
    }
`

export const InfoHeaderHeading = styled.h1`
    font-size: 5rem;
    font-family: 'Caveat', sans-serif;
    padding: 0 40px;
    text-align: center;
`

export const InfoHeaderP = styled.p`
    font-size: 1.3rem;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    padding: 20px;

    @media screen and (max-width: 280px) {
        font-size: 1rem;
        padding: 40px;
    }
`

export const InfoHeaderButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0 20px;
`

export const InfoHeaderButton = styled.button`
    background: #28a745;
    color: #fff;
    outline: none;
    border: 1px solid transparent;
    border-color: #28a745;
    border-radius: 0.25rem;
    user-select: none;
    margin: 0 10px;
    padding: 6px 12px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover {
        background: transparent;
        color: #28a745;
    }
`

// Info Body Content

export const InfoBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 100%;
    margin: 60px 20px 20px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin: 60px 0 20px;
    }
`

export const InfoBodyTopContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 20px;
`

export const InfoBodyHeading = styled.h2`
    text-decoration: underline;
    margin-left: 10px;
`

export const InfoBodyBottomContent = styled.div`
    display: flex;
    justify-content: left; 
    width: 100%;
    min-height: 100%;
    max-height: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-left: 0;
    }
`

export const InfoBodyWelcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2vh auto;

    @media screen and (max-width: 786px) {
        margin: 2vh;
    }
`

export const InfoBodyWelcomeHeading = styled.h2`
    letter-spacing: 3px;
    font-size: 3rem;
    font-weight: bold;
`

export const InfoBodyWelcomeP = styled.p`
    letter-spacing: 2px;
    font-size: 1rem;
    color: #fff;
`

export const InfoBodyImageContent = styled.div`
    margin: 20px;
`

export const InfoBodyImage = styled.img`
    border: ridge;
    border-radius: 5px;
    width: 234px;
    height: 350px;
`

export const InfoBodyImageTitle = styled.h4`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px auto;
`

export const InfoBodyImageYear = styled.span`
    color: gray;
    font-size: 125%;
`

export const InfoBodyLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60vh;

    @media screen and (max-width: 768px) {
        height: 30vh;
    }
`