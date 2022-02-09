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
    timeline: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    },
    timelinePaper: {
        minHeight: '100px',
        background: 'rgba(0, 0, 0, 0.22)'
    },
    timelineHeading: {
        color: '#aeaeae',
        textAlign: 'center',
    },
    timelineDetail: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        textAlign: 'center',
        width: '100%',
        color: '#f5f5f5',
        ['@media (max-width: 768px)']: {
            fontSize: '0.9rem',
            textAlign: 'left',
            margin: '0 2px'
        }
    }
});