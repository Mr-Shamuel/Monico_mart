
import { Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from '../Login/firebase.config';
import swal from 'sweetalert';
import regimg from '../../Img/register.png';

import Zoom from 'react-reveal/Zoom';

// const app  =  initializeApp(firebaseConfig);
const Register = () => {

    initializeApp(firebaseConfig);
    const auth = getAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleNameOnBlur = e => {
        setName(e.target.value);
        console.log(e.target.value);
    }
    const handleOnBlur = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleOnBlur2 = e => {
        setPass(e.target.value);
        console.log(e.target.value);
    }

    const handleLoginSubmit = e => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                // Signed in 
                const user = result.user;
                setUserName();
                console.log(user);


                swal({
                    title: "Account successfully Registered",

                    icon: "success",
                    button: "Ok",
                });
                // ...
            })
            .catch((error) => {

                swal({
                    title: "Warning !",
                    text: "Insert Valid Information",
                    icon: "error",
                    button: "Ok",
                });
            });

        e.preventDefault();
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then((result) => {

            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });

    }

    return (
        <div className="container  ">
            <Zoom>
                <div className="con">
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography variant="body1" gutterBottom>Register</Typography>
                            {<form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Name"
                                    name="name"
                                    onBlur={handleNameOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur2}
                                    variant="standard" />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button variant="text">Already Registered? Please Login</Button>
                                </NavLink>
                            </form>}




                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '50%', display: "block", margin: "30px auto" }} src={regimg} alt="" />

                        </Grid>
                    </Grid>
                </div>
            </Zoom>

        </div>
    );
};

export default Register;