import React, { useState } from 'react';

import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import { initializeApp } from "firebase/app";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Alert } from '@mui/material';

const theme = createTheme();

function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState({});
    const [errorCode, setErrorCode] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [isDisabled, setIsDisabled] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                console.log(user);
                setIsDisabled(true);
                setIsError(false);
                setIsSuccess(true);
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
                setErrorCode(error.code);
                setErrorMessage(error.message);

                console.log(errorCode);
                console.log(errorMessage);
                setIsError(true);
                setIsSuccess(false);
            })

    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="off"
                            autoFocus
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="off"
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={
                                (event) => {
                                    event.preventDefault();
                                    handleSubmit();
                                }
                            }
                            disabled={isDisabled}
                        >
                            Create Account
                        </Button>
                        {isError && <Alert severity="error">Error dected! {errorCode}, {errorMessage} </Alert>}
                        {isSuccess && <Alert severity="success">Sign Up success...</Alert>}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default SignUp;
