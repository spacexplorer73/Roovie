import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '100%',
        minHeight: '80vh',
        margin: '10vh 20px 0',
        overflow: 'hidden',
        marginBottom: '35px',
        background: '#333'
    },
    heading: {
        padding: '20px',
        color: '#aeaeae'
    },
    link: {
        padding: '20px',
        margin: '20px',
        textDecoration: 'none !important',
        color: '#fff',
        '&:hover': {
            color: '#48b4f3e0'
        }
    }
});