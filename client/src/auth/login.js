import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";

import { login, isUserAuthenticated } from "../actions/authActions";

import { TextField, Button, CircularProgress, InputAdornment, IconButton } from "@material-ui/core";
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

    // Redirect user to home if logged in
    useEffect(() => {
        if(!auth.isAuthenticated) {
            dispatch( isUserAuthenticated() )
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
        dispatch(login({...formData, rememberMe: rememberMe}));
    }

    // If user is logged in, redirect user to home
    if(auth.isAuthenticated) {
        return <Redirect to="/home" />
    }

    
    return(
        <LoginContainer>
            <LoginContent onSubmit={ handleSubmit }>
            { (auth.loading) ? 
                <CircularProgress />
                    :
                <>
                    <LoginHeading>Sign Into Your Account</LoginHeading>
                    <LoginInputWrapper>
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
                    </LoginInputWrapper>
                    <LoginInputWrapper>
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
                    </LoginInputWrapper>
                    <LoginInputWrapper>
                        <Link to="/forgot-password">
                            Forgot Password?
                        </Link>
                    </LoginInputWrapper>
                    <LoginInputWrapper>
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Sign In
                        </Button>
                    </LoginInputWrapper>
                    <LoginInputWrapper>
                        Don't have an account? {" "}
                        <Link to="/register">
                            Create One
                        </Link>
                    </LoginInputWrapper>
                </>
            }
            </LoginContent>
        </LoginContainer>
    )
}

export default Login;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 20vh 20px 20px;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        margin: 15vh 20px 20px;
    }
`

const LoginContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35%;
    border: 1px solid #333;
    border-radius: 20px;
    background: #f5f5f5;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const LoginHeading = styled.h2`
    color: #333;
`

const LoginInputWrapper = styled.div`
    margin: 15px;
    width: 100%;
`