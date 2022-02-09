import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { Paper, TextField, Button, CircularProgress } from '@material-ui/core';
import { useStyles } from './styles';

/**
* @author
* @function ContactUs
**/

const initialState = { username: '', email: '', subject: '', description: '' };

const ContactUs = (props) => {
    const [contactData, setContactData] = useState(initialState);
    const [state, handleSubmit] = useForm("xvodqjro");
    const classes = useStyles();

    // loading
    if(state.submitting) {
        return (
            <Paper className={classes.formspreePaper} elevation={6}>
                <CircularProgress size="10rem" />
            </Paper>
        );
    }

    // success
    if (state.succeeded) {
        return (
            <Paper className={classes.formspreePaper} elevation={6}>
                Thank You For Submitting!
                <br />
                
            </Paper>
        );
    }

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value })
    }

    return(
        <Paper className={classes.container} elevation={6}>
            <div className={classes.heading}>Contact Us</div>
            <form className={classes.formContainer} onSubmit={ handleSubmit }>
                <div className={classes.inputWrapper}>
                    <TextField 
                        fullWidth
                        label="Username"
                        variant="filled"
                        name="username"
                        onChange={ handleChange }
                        value={contactData.username}
                        InputProps={{
                            className: classes.textField
                        }}
                        InputLabelProps={{
                            className: classes.textField
                        }}
                    />
                </div>
                <div className={classes.inputWrapper}>
                    <TextField 
                        fullWidth
                        label="Email"
                        variant="filled"
                        type="email" 
                        name="email"
                        onChange={ handleChange }
                        value={contactData.email}
                        InputProps={{
                            className: classes.textField
                        }}
                        InputLabelProps={{
                            className: classes.textField
                        }}
                    />
                </div>
                <div className={classes.inputWrapper}>
                    <TextField 
                        fullWidth
                        label="Subject"
                        variant="filled"
                        name="subject"
                        onChange={ handleChange }
                        value={contactData.subject}
                        InputProps={{
                            className: classes.textField
                        }}
                        InputLabelProps={{
                            className: classes.textField
                        }}
                    />
                </div>
                <div className={classes.inputWrapper}>
                    <TextField 
                        fullWidth
                        label="Description"
                        multiline
                        rows={5}
                        name="description"
                        variant="filled"
                        onChange={ handleChange }
                        value={contactData.description}
                        InputProps={{
                            className: classes.textField
                        }}
                        InputLabelProps={{
                            className: classes.textField
                        }}
                    />
                </div>
                <div className={classes.inputWrapper}>
                    <Button fullWidth type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </div>
            </form>
        </Paper>
    )
}

export default ContactUs;