import { makeStyles } from "@material-ui/core";

// login styles
export const useLoginStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '20vh 20px 20px',
        overflow: 'hidden',
        ['@media (max-width: 768px)']: {
            margin: '15vh 20px 20px'
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '35%',
        border: '1px solid #333',
        borderRadius: '20px',
        background: '#f5f5f5',
        padding: '20px',
        ['@media (max-width: 768px)']: {
            width: '100%'
        }
    },
    heading: {
        color: '#333'
    },
    inputWrapper: {
        margin: '15px',
        width: '100%'
    },
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '50vh'
    },
    loader: {
        margin: '23vh'
    }
});

// register styles
export const useRegisterStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '15vh 20px 20px',
        overflow: 'hidden',

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '35%',
        border: '1px solid #333',
        borderRadius: '20px',
        background: '#f5f5f5',
        padding: '20px',

        ['@media (max-width: 768px)']: {
            width: '100%'
        }
    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        minWidth: '100%',
        ['@media (max-width: 768px)']: {
            alignItems: 'center',
            flexDirection: 'column'
        }
    },
    heading: {
        color: '#333'
    },
    inputWrapper: {
        margin: '15px',
        width: '100%'
    }
});