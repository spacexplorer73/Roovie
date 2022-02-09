import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";

import { register, isAdminAuthenticated } from "../actions/authActions";

import { TextField, Button, FormControlLabel, FormHelperText, FormControl, Checkbox, InputAdornment, IconButton } from "@material-ui/core";
import { useRegisterStyles } from "./styles";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/**
* @author
* @function Register
**/
const initialState = { email: '', password: '', confirmPassword: '' };

const Register = (props) => {
    const [formData, setFormData] = useState(initialState);
    const [adminProfilePicture, setAdminProfilePicture] = useState('');
    const [agreedTerms, setAgreedTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const auth = useSelector(state => state.auth);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useRegisterStyles();

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
        const form = new FormData();
        form.append('email', formData.email);
        form.append('username', formData.username);
        form.append('password', formData.password);
        form.append('confirmPassword', formData.confirmPassword);
        form.append('agreedTerms', agreedTerms);
        form.append('adminProfilePicture', adminProfilePicture);
        // To check if form is working or not
        // console.log(form)
        dispatch(register( form, history ));
    }

    // If user is logged in, redirect user to home
    if(auth.isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    // If user is created or already exists, redirect user to signin
    if(auth.email === "Email already exists") {
        return <Redirect to="/" />
    }

    return(
        <div className={classes.container}>
            <form className={classes.content} onSubmit={ handleSubmit } encType="multipart/form-data">
                <h2 className={classes.RegisterHeading}>Sign Up</h2>
                <div className={classes.row}>
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
                            type="email" 
                        />
                    </div>
                    <div className={classes.inputWrapper}>
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
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.inputWrapper}>
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
                    </div>
                    <div className={classes.inputWrapper}>
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
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.inputWrapper}>
                        <TextField
                            type="file"
                            variant="filled"
                            fullWidth
                            label="Add Profile Picture"
                            filename="adminProfilePicture"
                            multiple={false}
                            onChange={ (e) => { setAdminProfilePicture(e.target.files[0]) } }
                            id="adminProfilePicture"
                            InputLabelProps={{ shrink: true }}
                        />
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.inputWrapper}>
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
                    </div>
                </div>
                <div className={classes.inputWrapper}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                        Sign Up
                    </Button>
                </div>
                <div className={classes.inputWrapper}>
                    Already have an account? {" "}
                    <Link to="/">
                        Click Here
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register;