import { makeStyles } from "@material-ui/core";

// Navbar Styles
export const useNavbarStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'fixed',
        height: '60px',
        width: '100%',
        background: '#2c688be0',
        top: '0',
        right: '0',
        marginBottom: '60px',
        zIndex: '2',
        ['@media (max-width: 768px)']: {
            justifyContent: 'space-between'
        }
    },
    linksWrapper: {
        display: 'flex',
        ['@media (max-width: 768px)']: {
            display: 'none'
        }
    },
    links: {
        textDecoration: 'none !important',
        color: '#fff',
        fontSize: '1rem',
        padding: '20px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            background: '#fff',
            color: '#333',
        }
    },
    adminAlias: {
        display: 'flex',
        ['@media (max-width: 768px)']: {
            display: 'none'
        }
    },
    logoutButton: {
        background: '#ffdf00'
    },
    avatar: {
        margin: '10px',
        color: '#333', 
        cursor: 'pointer'
    }
});