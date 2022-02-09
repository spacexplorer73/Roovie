import styled from "styled-components"

export const UserProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 80px 20px 20px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin: 80px 5px 20px;
    }
`

export const UserProfileContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 30vh;
    border: 1px solid #333;
    border-radius: 20px;
    background: #333;
    padding: 20px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 20px;
        padding: 10px;
    }
`

export const UserProfileTopContent = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    min-height: 30vh;
    border: 1px solid #333;
    border-radius: 20px;
    background: #333;
    padding: 20px;
    margin: 20px 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const UserProfileMiddleContent = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const UserProfileBottomContent = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
`

export const UserProfileImageContent = styled.div`
    z-index: 1;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`

export const UserProfileInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const UserProfileAddMovie = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
`

export const UserProfileReviewSection =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
`

export const UserProfileSubContent = styled.div`
    display: flex;
    align-content: center;
    width: 100%;
    align-items: stretch;

`

export const UserProfileAddMovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const UserProfileHeading = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        text-align: center;
    }
`

export const UserProfileInputWrapper = styled.div`
    width: 100%;
    margin: 20px;
`

export const UserProfileMovies = styled.div`
    display: flex;
    justify-content: center; 
    width: 100%;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        align-items: center;
        margin-bottom: 25px;
    }
`

export const UserProfileMoviesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const UserProfileViewAllButton = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const UserProfileLoader = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0;
`

// User Show All Movies Styling

export const UserMoviesContainer = styled.div`
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

export const UserMoviesHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 20px;
`

export const UserMoviesHeading = styled.h1`
    font-family: 'Caveat';
    margin-left: 10px;
`

export const UserMoviesBody = styled.div`
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

export const UserReviewsBody = styled.div`
    display: flex;
    justify-content: left; 
    width: 100%;
    min-height: 100%;
    max-height: auto;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        align-items: center;
        margin: 0 auto;
        width: 90%;
    }
`