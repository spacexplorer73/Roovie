import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";

import { login, isAdminAuthenticated } from "../actions/authActions";

import { TextField, Button, CircularProgress, InputAdornment, IconButton } from "@material-ui/core";
import { useLoginStyles } from "./styles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/**
* @author
* @function Login
**/

const initialState = { email: '', password: '' };

const Login = (props) => {
    const [formData, setFormData] = useState(initialState);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const classes = useLoginStyles();

    // Redirect user to home if logged in
    useEffect(() => {
        if(!auth.isAuthenticated) {
            dispatch( isAdminAuthenticated() )
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // To check if form is working or not
        //console.log(formData)
        dispatch(login( {...formData, rememberMe: rememberMe} ));
    }

    // If user is logged in, redirect user to home
    if(auth.isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    
    return(
        <div className={classes.container}>
            <form className={classes.content} onSubmit={ handleSubmit }>
            { (auth.loading) ? 
                <div className={classes.loaderContainer}>
                    <CircularProgress className={classes.loader} size='5rem' />
                </div>
                    :
                <>
                    <h2 className={classes.heading}>Sign In</h2>
                    <div className={classes.inputWrapper}>
                        <TextField 
                            error={ (auth.email || auth.emailNotFound) ? true : false }
                            onChange={ handleChange }
                            value={ formData.email }
                            id="email"
                            fullWidth 
                            label="Email"
                            helperText={ (auth.email) ? auth.email : auth.emailNotFound }
                            variant="filled" 
                        />
                    </div>
                    <div className={classes.inputWrapper}>
                        <TextField 
                            error={ (auth.password || auth.passwordIncorrect) ? true : false }
                            onChange={ handleChange }
                            value={ formData.password }
                            id="password"
                            fullWidth 
                            label="Password"
                            helperText={ (auth.password) ? auth.password : auth.passwordIncorrect }
                            variant="filled" 
                            type={ (showPassword) ? 'password' : 'text' }
                            InputProps={{ endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton onClick={ handleShowPassword }>
                                    { (showPassword) ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              )
                            }}
                        />
                    </div>
                    <div className={classes.inputWrapper}>
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className={classes.inputWrapper}>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Sign In
                        </Button>
                    </div>
                    <div className={classes.inputWrapper}>
                        Don't have an account? {" "}
                        <Link to="/register">
                            Create One
                        </Link>
                    </div>
                </>
            }
            </form>
        </div>
    )
}

export default Login;