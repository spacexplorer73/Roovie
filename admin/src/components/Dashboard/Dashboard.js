import { Paper } from '@material-ui/core';
import React from 'react';

import { useStyles } from "./styles";

/**
* @author
* @function Dashboard
**/

const Dashboard = (props) => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <Paper className={classes.paper} elevation={6}>
                <div className={classes.heading}>Welcome back, <b>{admin?.username}</b></div>
            </Paper>
        </div>
    );
}

export default Dashboard;