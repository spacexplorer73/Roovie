import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchRequests, deleteRequest } from "../../actions/requestActions";

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { useStyles } from "./styles";

/**
* @author
* @function Requests
**/

const Requests = (props) => {
    const { requests } = useSelector(state => state.request);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch( fetchRequests() );
    }, [requests]);

    return(
        <div className={classes.container}>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Genre</TableCell>
                        <TableCell align="right">Year</TableCell>
                        <TableCell align="right">Rating</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Approve</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {requests.map((req) => (
                        <TableRow key={req._id}>
                        <TableCell component="th" scope="row">
                            <Link className={classes.links} to='/'>{req.title}</Link>
                        </TableCell>
                        <TableCell align="right">{req.genre}</TableCell>
                        <TableCell align="right">{req.year}</TableCell>
                        <TableCell align="right">{req.rating}</TableCell>
                        <TableCell align="right">{req.type}</TableCell>
                        <TableCell align="right">
                            <IconButton className={classes.approve} href={`/movie/${req._id}`}>
                                <CheckIcon fontSize="large" />
                            </IconButton>
                        </TableCell>
                        <TableCell align="right">
                            <IconButton className={classes.delete} onClick={ () => { dispatch( deleteRequest(req._id) ) } }>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Requests;