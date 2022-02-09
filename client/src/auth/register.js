import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import styled from "styled-components";

import { register, isUserAuthenticated } from "../actions/authActions";

import { TextField, Button, FormControlLabel, FormHelperText, FormControl, Checkbox, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/**
* @author
* @function Register
**/
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Register = (props) => {
    const [formData, setFormData] = useState(initialState);
    const [userProfilePicture, setUserProfilePicture] = useState('');
    const [agreedTerms, setAgreedTerms] = useState(false);
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
        //console.log({ ...formData, agreedTerms: agreedTerms, userProfilePicture: userProfilePicture });
        const form = new FormData();
        form.append('email', formData.email);
        form.append('username', formData.username);
        form.append('password', formData.password);
        form.append('confirmPassword', formData.confirmPassword);
        form.append('agreedTerms', agreedTerms);
        form.append('userProfilePicture', userProfilePicture);
        dispatch(register( form ));
    }

    // If user is logged in, redirect user to home
    if(auth.isAuthenticated) {
        return <Redirect to="/home" />
    }

    // If user is created or already exists, redirect user to signin
    if(auth.userCreated === "User created successfully!" || auth.email === "Email already exists") {
        return <Redirect to="/login" />
    }

    return(
        <RegisterContainer>
            <RegisterContent onSubmit={ handleSubmit }>
                <RegisterHeading>Create Your Account</RegisterHeading>
                <RegisterRow>
                    <RegisterInputWrapper>
                        <TextField 
                            error={ (auth.email || auth.emailNotFound) ? true : false }
                            onChange={ handleChange }
                            value={ formData.email }
                            id="email"
                            fullWidth 
                            label="Email"
                            helperText={ (auth.email) ? auth.email : auth.emailNotFound }
                            variant="filled" 
                            type="email" 
                        />
                    </RegisterInputWrapper>
                    <RegisterInputWrapper>
                        <TextField 
                            error={ (auth.username) ? true : false }
                            onChange={ handleChange }
                            value={ formData.username }
                            id="username"
                            fullWidth 
                            label="Username" 
                            helperText={ auth.username }
                            variant="filled" 
                            type= "text" 
                        />
                    </RegisterInputWrapper>
                </RegisterRow>
                <RegisterRow>
                    <RegisterInputWrapper>
                        <TextField 
                            error={ (auth.password || auth.passwordLength || auth.passwordIncorrect) ? true : false }
                            onChange={ handleChange }
                            value={ formData.password }
                            id="password"
                            fullWidth 
                            label="Password" 
                            helperText={ (auth.password) ? auth.password : ((auth.passwordLength ? auth.passwordLength : auth.passwordIncorrect )) }
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
                    </RegisterInputWrapper>
                    <RegisterInputWrapper>
                        <TextField 
                            error={ (auth.confirmPassword) ? true : false }
                            onChange={ handleChange }
                            value={ formData.confirmPassword }
                            id="confirmPassword"
                            fullWidth 
                            label="Confirm Password" 
                            helperText={ auth.confirmPassword }
                            variant="filled" 
                            type="password" 
                        />
                    </RegisterInputWrapper>
                </RegisterRow>
                <RegisterRow>
                    <RegisterInputWrapper>
                        <TextField
                            type="file"
                            variant="filled"
                            fullWidth
                            label="Add Profile Picture"
                            filename="userProfilePicture"
                            multiple={false}
                            onChange={ (e) => { setUserProfilePicture(e.target.files[0]) } }
                            id="userProfilePicture"
                            InputLabelProps={{ shrink: true }}
                        />
                    </RegisterInputWrapper>
                </RegisterRow>
                <RegisterRow>
                    <RegisterInputWrapper>
                        <FormControl error={!agreedTerms}>
                            <FormControlLabel 
                                control={
                                <Checkbox
                                    onChange={ () => { setAgreedTerms(!agreedTerms) } }
                                    id="checkbox" 
                                    type="checkbox"
                                    color="primary"
                                    checked={agreedTerms}
                                />
                                }
                                label="Agree to terms & conditions"
                            />
                            <FormHelperText>{ auth.agreedTerms }</FormHelperText>
                        </FormControl>
                    </RegisterInputWrapper>
                </RegisterRow>
                <RegisterInputWrapper>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                        Sign Up
                    </Button>
                </RegisterInputWrapper>
                <RegisterInputWrapper>
                    Already have an account? {" "}
                    <Link to="/login">
                        Click Here
                    </Link>
                </RegisterInputWrapper>
            </RegisterContent>
        </RegisterContainer>
    )
}

export default Register;

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    margin: 15vh 20px 20px;
    overflow: hidden;
`

const RegisterContent = styled.form`
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

const RegisterRow = styled.div`
    display: flex;
    justify-content: space-around;
    min-width: 100%;

    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`

const RegisterHeading = styled.h2`
    color: #333;
`

const RegisterInputWrapper = styled.div`
    margin: 15px;
    width: 100%;
`