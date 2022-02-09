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
    privacyContainer: {
        color: '#aeaeae',
        lineHeight: '1.5rem'
    },
    privacyButton: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '10px 0'
    },
    points: {
        margin: '10px 0'
    }
});