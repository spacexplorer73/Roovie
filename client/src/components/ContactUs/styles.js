import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '100%',
        margin: '100px 20px 0px',
        overflow: 'hidden',
        marginBottom: '35px',
        background: '#333'
    },
    heading: {
        fontFamily: 'Caveat',
        fontSize: '2.8rem',
        margin: '0 20px'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        margin: '0 20px'
    },
    inputWrapper: {
        width: '40%',
        margin: '20px 0'
    },
    textField: {
        color: '#fff'
    },
    formspreePaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '150px 20px 60px',
        overflow: 'hidden',
        maxWidth: '100%',
        height: '60vh',
        fontSize: '3rem',
        color: '#fff',
        background: '#333'
    },

});