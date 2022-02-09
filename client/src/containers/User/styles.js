import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    largeAvatar: {
        border: 'ridge',
        borderRadius: '5px',
        width: '100%',
        height: '250px',
        objectFit: 'cover',
        cursor: 'pointer'
    },
    textField: {
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
    },
    paper :{
        padding: '5px',
        margin: '10px 5px',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#fff'
    },
    editButton: {
        margin: '0 10px'
    },
    textFieldColor: {
        color: '#fff'
    },
    container: {
        position: 'relative',
        '&:hover': {
            '& div': {
                opacity: '1'
            },
            '& button': {
                transform: 'translate(-50%, -50%)'
            }
        }
    },
    overlay: {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        border: 'ridge',
        borderRadius: '5px',
        transition: '0.5s ease',
        backgroundColor: '#333',
        opacity: '0'
    },
    overlayButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, 400%)',
        textAlign: 'center',
        transition: '0.5s ease',
        padding: '12px 20px',
        border: '1px solid transparent',
        borderRadius: '5px',
        background: '#28a745',
        color: '#fff',
        '&:active': {
            background: '#fff',
            color: '#28a745'
        }
    },
    profileUpdateContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40vh'
    },
    profileUpdate: {
        padding: '20px',
        width: '50%',
        background: '#333',
        borderRadius: '10px',
        ['@media (max-width: 768px)']: {
            width: '80%'
        }
    },
    colorAndMargin: {
        color: '#f9f9f9',
        margin: '10px 0',
        ['@media (max-width: 768px)']: {
            fontSize: '1.3rem'
        }
    },
    flexContainer: { 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        color: '#fff'
    },
    formControlLabel: {
        color: '#fff'
    },
    formControlOptions: {
        color: '#fff'
    }
}))