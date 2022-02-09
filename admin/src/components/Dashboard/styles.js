import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '45vh 20px 20px',
        overflow: 'hidden',
    },
    paper: {
        padding: '10px',
        background: 'rgba(0, 0, 0, 0.3)'
    },
    heading: {
        fontSize: '4rem'
    }
});