import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '15vh 20px 20px',
        overflow: 'hidden',
    },
    links: {
        textDecoration: 'none !important',
        color: '#333',
        '&:hover': {
            color: '#333'
        }
    },
    approve: {
        '&:hover': {
            color: 'green'
        }
    },
    delete: {
        '&:hover': {
            color: 'red'
        }
    }
});