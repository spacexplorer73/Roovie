import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '294px',
    height: '500px'
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    flex: 1,
    width: '100%'
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    marginBottom: '20px'
  },
  recommendedPosts: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    minHeight: '100%',
    maxHeight: 'auto',
    flexWrap: 'wrap',
    ['@media (max-width: 768px)']: {
      
    }
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '100%',
    margin: '60px 20px 20px',
    overflow: 'hidden',
    padding: '20px', 
    borderRadius: '15px',
    background: '#333',
    ['@media (max-width: 768px)']: {
      margin: '80px 5px 20px',
    }
  },
  heading: {
    color: '#f5f5f5',
    ['@media (max-width: 768px)']: {
      fontSize: '1.5rem'
    }
  },
  description: {
    color: '#f9f9f9',
    ['@media (max-width: 768px)']: {
      lineHeight: '24px'
    }
  },
  hr: {
    margin: '20px 0', 
    background: '#f9f9f9'
  },
  hrBelowLike: {
    display: 'none',
    margin: '20px 0', 
    background: '#f9f9f9',
    ['@media (max-width: 768px)']: {
      display: 'block',
    }
  },
  ratingHeading: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffdf00',
    margin: '20px 0'
  },
  rating: {
    margin: '20px 5px',
    background: 'rgba(255, 223, 0, 0.3)'
  },
  recMovImg: {
    border: 'ridge',
    borderRadius: '5px',
    objectFit: 'cover',
    ['@media (max-width: 768px)']: {
      width: '135px',
      height: '205px'
    }
  },
  recMovTitle: {
    color: '#f9f9f9',
    ['@media (max-width: 768px)']: {
      fontSize: '0.9rem'
    }
  },
  upvote: {
    color: 'green',
    transform: 'rotate(-90deg)'
  }
}));