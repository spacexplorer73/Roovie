import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '70%',
        margin: '15vh auto 0',
        background: '#333',
        border: '1px solid #333',
        borderRadius: '20px',
        padding: '20px'

    },
    heading: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '30px',
        color: '#fff',
        ['@media (max-width: 768px)']: {
            fontSize: '25px',
            width: '100%',
            textAlign: 'center'
        }
    },
    addMovieWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    inputWrapper: {
        width: '100%',
        margin: '20px'
    },
    textFieldColor: {
        color: '#fff'
    },
    // loader
    loaderContainer: {
        background: '#333'
    }
});