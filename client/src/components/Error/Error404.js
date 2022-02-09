import React from 'react';
import { useHistory } from "react-router-dom";

import { Paper, Button } from "@material-ui/core";
import { useStyles } from './styles';

/**
* @author
* @function Error404
**/

const Error404 = (props) => {
    const history = useHistory();
    const classes = useStyles();

    return(
        <Paper className={classes.container} elevation={6}>
            <h2 className={classes.heading}>Error 404 - Not Found!</h2>
            <Button color="primary" className={classes.link} onClick={ () => { history.goBack() } }>Click Here to Go Back</Button>
        </Paper>
    );
}

export default Error404;