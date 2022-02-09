import styled from "styled-components";

export const MoviesContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin: 60px 0 0;
    overflow: hidden;
`

export const MoviesSearchContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    background: #05628e;
    margin: auto;
`

export const MoviesSearchHeading = styled.h2`
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
    }
`

export const MoviesSearchTopContent = styled.div`
    display: flex;
    width: 30%;

    @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
    }
`

export const MoviesSearchBar = styled.input`
    width: 100%;
    min-height: 40px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background: #a8dbff;
    margin: 0 20px;
    transition: width 0.4s ease-in-out;

    &:focus {
        background: #fff;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const MoviesSearchButton = styled.button`
    background: transparent;
    color: #fff;
    padding: 10px 12px;
    outline: none;
    border: 1px solid transparent;
    border-color: #fff;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover {
        background: #fff;
        color: #333;
    }
`

export const MoviesSearchBottomContent = styled.div`
    display: flex;
    align-items: left;
    margin: 20px 0; 
`

export const MoviesSearchP = styled.p`
    color: #fff;
    margin-top: 10px;
    margin-right: 10px;
    font-size: 1.3rem;
`

export const MoviesSearchByCategory = styled.select`
    width: 130px;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    background: #a8dbff;
    margin: 0 20px;
    transition: width 0.4s ease-in-out;
`

export const MoviesDashboard = styled.div`

`

export const MoviesDashboardContent = styled.div`

`

export const MoviesDashboardTopContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 20px;
`

export const MoviesDashboardTopContentHeading = styled.h3`
    text-decoration: underline;
    margin-left: 10px;
`

export const MoviesDashboardBottomContent = styled.div`
    display: flex;
    justify-content: space-around; 
    width: 100%;
    min-height: 100%;
    max-height: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-bottom: 25px;
    }
`

export const MoviesDashboardImageContent = styled.div`
    margin: 20px 25px;
    max-width: 234px;

    @media screen and (max-width: 768px) {
        margin: 30px auto;
        max-width: 135px;
        height: 205px;
    }
`

export const MoviesDashboardImage = styled.img`
    border: ridge;
    border-radius: 5px;
    width: 234px;
    height: 350px;
    object-fit: cover;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 135px;
        height: 205px;
    }
`

export const MoviesDashboardImageTitle = styled.h4`
    color: #000;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 10px auto 0;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`

export const MoviesDashboardImageYear = styled.span`
    color: #f5f5f5;
    font-weight: 500;
    margin: 0 auto 10px;
    
    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`

export const MoviesLoader = styled.div`
    display: flex;
    justify-content: center;
    margin: 100px 0;
`