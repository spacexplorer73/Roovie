import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        width: '100%'
    },
    addReviewContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    addReview: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: '10px 0'
    },
    reviews: {
        display: 'flex',
        flexDirection: 'column'
    },
    heading: {
        color: '#f9f9f9',
        ['@media (max-width: 768px)']: {
            fontSize: '1.5rem'
        }
    },
    buttonWrapper: {
        display: 'flex',
        width: '100%',
        margin: '10px 0'
    },
    button: {
        color: '#f5f5f5',
        background: 'rgba(0, 0, 0, 0.2)',
        marginRight: '10px'
    },
    userNotLoggedIn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '20vh',
        fontSize: '1.6rem',
        ['@media (max-width: 768px)']: {
            fontSize: '1.4rem'
        }
    },
    redirectLogin: {
        textDecoration: 'none !important',
        cursor: 'pointer',
        fontSize: '1.5rem',
        fontFamily: 'Caveat',
        color: 'black',
        '&:hover': {
            color: '#48b4f3e0'
        }
    },
    textFieldColor: {
        color: '#fff'
    },
    // review Template
    reviewTemplate: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '10px 0',
        color: '#fff'
    },
    reviewTemplateAvatar: {
        margin: '0 10px;'
    },
    // review card
    paper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        paddingTop: '12px',
        background: 'rgba(0, 0, 0, 0.09)',
        color: '#fff',
        margin: '30px 0'
    },
    userReviews: {
        color: '#aeaeae'
    },
    accordion: {
        width: '-webkit-fill-available !important',
        background: '#333 !important'
    },
    title: {
        fontSize: '1.2rem',
        color:'#fff'    
    }
});